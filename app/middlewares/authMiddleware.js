import jwt from 'jsonwebtoken'

const authorization = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return res.sendStatus(403)
  }
  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY)
    req.userId = data.userId
    return next()
  } catch {
    return res.sendStatus(403)
  }
}

export { authorization }
