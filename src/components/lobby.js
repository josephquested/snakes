// --- view --- //
var html = require('yo-yo')

module.exports = (state, dispatch) => {
  _dispatch = dispatch

  return html`
    <div>
      <h1>snakes</h1>
      <h2>lobby</h2>
      <button onclick=${hostGame}>host game</button>
      <hr>
      ${renderGames(state.games)}
    </div>
  `
}

function renderGames (games) {
  return games.map((game) => {
    return html`
      <h2>${game.hostid}</h2>
    `
  })
}

// --- socket --- //
var _dispatch

function hostGame () {
  io.emit('host-game')
}

io.emit('join-lobby')

io.on('join-game', (game) => {
  console.log('joining game!');
})

io.on('receive-games', (games) => {
  _dispatch({ type: 'UPDATE_GAMES', payload: games })
})
