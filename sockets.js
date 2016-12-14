module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.games = []

  io.on('connection', (socket) => {
    console.log(`${socket.id} connected`)

    socket.on('join-lobby', () => {
      socket.join('lobby')
      io.to('lobby').emit('receive-games', io.games)
    })

    socket.on('host-game', () => {
      io.games.push({ hostid: socket.id })
      io.to('lobby').emit('receive-games', io.games)
      io.to(socket.id).emit('join-game',
        io.games.find(game => game.hostid == socket.id)
      )
    })

    socket.on('join-game', (gameid) => {
      socket.join(gameid)
    })
  })

  return io
}
