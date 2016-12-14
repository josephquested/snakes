// --- view --- //
var html = require('yo-yo')

module.exports = (state, dispatch) => {
  _dispatch = dispatch

  return html`
    <div>
      <h1>snakes</h1>
      <h2>game</h2>
      <hr>
      ${renderBoard()}
    </div>
  `
}

function renderBoard (state, size) {
  return html`
    <table>
      <tr>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
    </table>
  `
}

// --- socket --- //
var _dispatch

// io.emit('join-lobby')

io.on('receive-game-state', (gameState) => {
  _dispatch({ type: 'UPDATE_GAME_STATE', payload: gameState })
})
