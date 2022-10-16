import { User } from '../models/user.js'
import { _400, _500 } from './errorController.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//------------------------------------------------------------- CREATE
async function login(req, res) {
  try {
    const { email, password } = req.body

    if (!(email && password)) {
      _400(req, res)
    }

    const user = await User.findUserByEmail(email)

    if (!user) {
      return res.status(400).json({ errorMessage: 'User not found' })
    }

    const verifiedPass = await bcrypt.compare(password, user.password)

    if (user && verifiedPass) {
      const token = jwt.sign(
        { userId: user.id, userEmail: user.email },
        process.env.TOKEN_KEY,
        { expiresIn: '6h' }
      )
      return res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: false,
        })
        .status(200)
        .json({
          message: 'Logged in successfully',
        })
    } else {
      return res.json({ errorMessage: 'Invalid Credentials' })
    }
  } catch (err) {
    return res.json({
      errotType: err.message,
      errorMessage: 'Unable to check credentials',
    })
  }
}

function logout(_req, res) {
  return res
    .clearCookie('access_token')
    .status(200)
    .json({ message: 'Successfully logged out' })
}

export { login, logout }
