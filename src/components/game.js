var yo = require('yo-yo')

module.exports = (state, dispatch) => {
  console.log('game from state:');
  console.log(state.game);
  
  return yo`
    <div>
      <h1>snakes</h1>
      <h2>game</h2>
      <hr>
    </div>
  `
}
