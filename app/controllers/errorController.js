function _400(req, res) {
  res.status(400).json('Bad Request')
}

function _404(req, res) {
  res.status(404).json({ 'Error 404': 'Page Not Found' })
}

function _500(err, req, res) {
  res.status(500).json({ 'Error 500': err.message })
}

export { _400, _404, _500 }
