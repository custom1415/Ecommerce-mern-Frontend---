// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy
// // const FacebookStrategy = require('passport-facebook').Strategy
// const keys = require('../config/keys')
// const mongoose = require('mongoose')
// const User = require('../../models/User') // getting Schema

// /* =================== Handeling Infinite run: Start ===================  */
// passport.serializeUser((user, done) => {
//   done(null, user.id)
// })

// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//     done(null, user)
//   })
// })

// // For Google
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: '/auth/google/callback'
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log(profile)
//       // profile has all google login data
//       /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: START =========  */

//       // check if user id already inserted
//       User.findOne({ userId: profile.id }).then((existingUser) => {
//         if (existingUser) {
//           done(null, existingUser)
//         } else {
//           // new user case
//           // insert new user id
//           new User({
//             userId: profile.id,
//             name: profile.displayName,
//             image: profile._json.picture
//           })
//             .save()
//             .then((user) => {
//               done(null, user)
//             })
//         }
//       })
//       /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: END =========  */
//     }
//   )
// )

// // For facebook
// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: keys.FACEBOOK_APP_ID,
//       clientSecret: keys.FACEBOOK_APP_SECRET,
//       callbackURL: '/auth/facebook/callback'
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log(profile)
//       /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: START =========  */
//       // check if user id already inserted
//       User.findOne({ userId: profile.id }).then((existingUser) => {
//         if (existingUser) {
//           done(null, existingUser)
//         } else {
//           // new user case
//           // insert new user id
//           new User({
//             userId: profile.id,
//             username: profile.displayName,
//             picture: profile._json.picture
//           })
//             .save()
//             .then((user) => {
//               done(null, user)
//             })
//         }
//       })
//       /* ========= DATABASE CHECK PRE EXIST AND INSERT QUERY: END =========  */
//     }
//   )
// )

const passport = require('passport')
const User = require('../../models/User')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GithubStrategy = require('passport-github2').Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/api/v1/auth/google/callback'
    },

    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      try {
        // Check if user already exists in the database
        let user = await User.findOne({ googleId: profile.id })

        if (user) {
          // If user already exists, return the user
          done(null, user)
        } else {
          // If user doesn't exist, create a new user and save to the database

          user = new User({
            socialLogin: 'google',
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value
          })

          console.log(user, '1222')
          await user.save()
          done(null, user)
        }
      } catch (err) {
        done(err, null)
      }
    }
  )
)
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/api/v1/auth/github/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile, 'github')
      try {
        // Check if user already exists in the database
        console.log(profile.id)
        let user = await User.findOne({ githubId: profile.id })

        console.log(user, '1222')

        if (user) {
          // If user already exists, return the user
          done(null, user)
        } else {
          // If user doesn't exist, create a new user and save to the database

          user = new User({
            socialLogin: 'github',
            githubId: profile.id,
            name: profile.displayName,
            photo: profile.photos[0].value
          })

          await user.save()
          done(null, user)
        }
      } catch (err) {
        console.log(err)
        done(err, null)
      }
    }
  )
),
  // Serialize and deserialize user for sessions
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err, null)
  }
})
