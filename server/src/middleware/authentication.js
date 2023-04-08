const CustomError = require('../errors')
const { isTokenValid } = require('../utils')

const authenticateUser = async (req, res, next) => {
  console.log(req.isAuthenticated())
  const token = req.signedCookies.token
  const isAuthenticated = req.isAuthenticated()
  if (!token && !isAuthenticated) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }

  try {
    if (token) {
      const { name, userId, role } = isTokenValid({ token })
      req.user = { name, userId, role }
    } else {
      const { _id, name, photo, role } = req.user
      console.log(req.user, 'useerrr')
      req.user = {
        name,
        userId: _id.toString(),
        photo,
        role
      }
    }
    next()
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Authentication Invalid')
  }
}

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        'Unauthorized to access this route'
      )
    }
    next()
  }
}

module.exports = {
  authenticateUser,
  authorizePermissions
}
