var redux = require('redux')
var morphdom = require('morphdom')
var reducer = require('./reducer')

var app = document.createElement('div')
document.querySelector('main').appendChild(app)

var initialState = { page: 'lobby' }
var store = redux.createStore(reducer, initialState)

store.subscribe(() => {
  var view = render(store.getState(), store.dispatch)
  morphdom(app, view)
})

var io = require('socket.io-client')('http://localhost:3000/')

function render (state, dispatch, io) {
  switch (state.page) {
    case 'lobby':
      return require('./components/lobby')(state, store.dispatch, io)

    case 'game':
      return require('./components/game')(state, store.dispatch, io)
  }
}

store.dispatch({type: 'INIT'})
