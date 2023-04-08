const mongoose = require('mongoose')

const connection = { isConnected: 0 }
async function connectDb() {
  console.log('hi')

  if (connection.isConnected) {
    console.log('Already connected')
    return
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      console.log('Use Previous Connection')
      return
    }
    await mongoose.disconnect()
  }
  const db = await mongoose.connect(`${process.env.MONGO_URL}`)
  console.log('New Connection to Database')
  connection.isConnected = db.connections[0].readyState
}

module.exports = connectDb
