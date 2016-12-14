module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.games = []

  io.on('connection', (socket) => {
    console.log(`${socket.id} joined!`)
    socket.join('lobby')

    socket.on('join-game', (gameid) => {
      socket.join(gameid)
    })
  })

  return io
}
