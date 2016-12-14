module.exports = (state, action) => {
  var newState = require('clone')(state)

  switch (action.type) {
    case 'UPDATE_GAMES':
      newState.games = action.payload
    return newState

    case 'JOIN_GAME':
    console.log('joining game');
      newState.page = 'game'
      newState.game = action.payload
    return newState

    default:
    return newState
  }
}
