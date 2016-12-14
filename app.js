var app = require('express')()
var http = require('http').Server(app);
var PORT = process.env.PORT || 3000

global.io = require('./sockets')(http)

app.get('/', (req, res) => {
  res.send('snakes')
})

http.listen(PORT, () => {
  console.log(`snakes exist on ${PORT}`)
})
