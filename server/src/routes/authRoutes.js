const express = require('express')
const passport = require('passport')
const CLIENT_URL = 'http://localhost:3000/'

const router = express.Router()
// const passport = require('passport')
// const keys = require('../config/keys')
const { register, login, logout } = require('../controllers/authController')

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

router.get('/social/login/success', (req, res) => {
  console.log(req.user, req.cookies)
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user
      //   cookies: req.cookies
    })
  }
})

router.get('/social/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure'
  })
})

router.post('/social/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
  })
  res.json({ success: true, redirectURI: '/' })
})
router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['profile']
  })
)

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
)
router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/social/login/failed'
  })
)
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/social/login/failed'
  })
)

module.exports = router
// router.get('/', (req, res) => {
//   res.status(200).json({
//     googleClientID: keys.googleClientID,
//     googleCLientSecret: keys.googleClientSecret
//   })
// })

// // google routes
// app.get(
//   '/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// )

// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google'),
//   (req, res) => {
//     res.redirect('/profile') // login case - redirect to profile page
//   }
// )

// // facebook routes
// app.get('/auth/facebook', passport.authenticate('facebook'))

// app.get(
//   '/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function (req, res) {
//     console.log('i am in fb callback')
//     // Successful authentication, redirect home.
//     res.redirect('/profile')
//   }
// )

// app.get('/api/current_user', (req, res) => {
//   res.send(req.user)
// })

// app.get('/api/logout', (req, res) => {
//   req.logout()
//   res.redirect('/') // log out case
//   // res.send(req.user);
// })
