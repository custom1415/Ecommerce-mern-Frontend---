const jwt = require('jsonwebtoken')

const createJWT = ({ payload }) => {
  console.log(payload.iat, 'create5')
  let expireOptions =
    payload.iat && payload.exp ? {} : { expiresIn: process.env.JWT_LIFETIME }
  const token = jwt.sign(payload, process.env.JWT_SECRET, expireOptions)
  return token
}

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET)

const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user })

  const oneDay = 1000 * 60 * 60 * 24

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true
  })
}

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse
}
