'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)
// const logic = require('./logic-game')

// creating table game and game in the database
const onCreateSession = function (event) {
  event.preventDefault()
  const data = {}
  $('#session-container').fadeIn()

}

// const onIndexGame = function (event) {
//   event.preventDefault()
//
//   api.index()
//     .then(ui.onIndexSuccess)
//     .catch(ui.onIndexFailure)
// }

// const onShowSession = function (event) {
//   event.preventDefault()
//   console.log('onShowSession ran!')
//
//   const data = getFormFields(event.target)
//   const session = data.session
//
//   if (session.id.length !== 0) {
//     api.showSessions(session)
//       .then(ui.onShowSuccess)
//       .catch(ui.onShowFailure)
//   } else {
//     $('#message').html('<p>Please provide a session id!</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please enter a session id!')
//   }
// }

// const onUpdateGame = function (event) {
//   event.preventDefault()
//   console.log('onUpdateGame ran!')
//
//   const data = getFormFields(event.target)
//   const game = data.game
//
//   if (game.text === '') {
//     $('#message').html('<p>Text is required</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Text is required!')
//     return false
//   }
//   if (game.id.length !== 0) {
//     api.update(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onUpdateFailure)
//   } else {
//     $('#message').html('<p>Please provide a game id!</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please provide a game id!')
//   }
// }

const addHandlers = () => {
  $('#session-create').on('click', onCreateSession)
  // $('#game-reset').on('click', logic.resetGame)
  // $('#session-index').on('submit', onIndexSession)
  // $('#session-show').on('submit', onShowSession)
  // $('#session-update').on('submit', onUpdateSession)
}

module.exports = {
  addHandlers
}
