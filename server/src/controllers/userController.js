const { StatusCodes } = require('http-status-codes')
const showCurrentUser = async (req, res) => {
  console.log(req.user)
  res.status(StatusCodes.OK).json({ user: req.user })
}
// const showCurrentUserGoogle = async (req, res) => {
//   res.status(StatusCodes.OK).json({ user: req.user })
// }

module.exports = { showCurrentUser }
