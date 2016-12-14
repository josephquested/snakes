module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.games = []

  io.on('connection', (socket) => {
    socket.on('join-lobby', () => {
      socket.join('lobby')
      io.to('lobby').emit('receive-games', io.games)
    })

    socket.on('request-join-game', (hostid) => {
      var game = io.games.find(game => game.hostid == hostid)
      if (!game.guestid) {
        game.guestid = socket.id
        io.to('lobby').emit('receive-games', io.games)
        io.to(socket.id).emit('join-game', game)
      } else {
        // spectate
      }
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
