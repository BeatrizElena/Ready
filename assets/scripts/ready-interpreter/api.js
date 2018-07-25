'use strict'

const config = require('../config')
const store = require('../store')

// get game
const create = function () {
  // console.log('data: ', data)

  let data = {
    "session": {
      "notes": string
      // "doctor_id" would have the fields from the doctors' table?
    }
  }

  return $.ajax({
    url: config.apiUrl + '/sessions',
    method: 'POST',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify(data)
  });
}

const show = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sessions/' + data.doctor.id,
    method: 'GET'
  })
}





// const index = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games?over=true',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
// const getGameById = function (id) {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + id,
//     method: 'GET',
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   });
// }
// const showGames = function (over) {
//
//   let url = (over === false) ? config.apiUrl + '/games?over=false' : config.apiUrl + '/games?over=true';
//
//   return $.ajax({
//     url: url,
//     method: 'GET',
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   });
// }
//
// const update = function (dataGame, index, value, over) {
//
//   let data = {
//     "game": {
//       "cell": {
//         "index": index,
//         "value": value
//       },
//       "over": over
//     }
//   }
//
//   return $.ajax({
//     url: config.apiUrl + '/games/' + dataGame.game.id,
//     method: 'PATCH',
//     contentType: "application/json; charset=utf-8",
//     dataType: "json",
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: JSON.stringify(data)
//   })
// }

module.exports = {
  create,
  show
  // index,
  // showGames,
  // update,
  // getGameById
}
