module.exports = (state, action) => {
  var newState = require('clone')(state)

  switch (action.type) {
    case 'UPDATE_GAMES':
      newState.games = action.payload
    return newState

    case 'JOIN_GAME':
      newState.page = 'game'
      newState.gameid = action.payload
    return newState

    default:
    return newState
  }
}
