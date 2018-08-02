'use strict'

const config = require('../config')
const store = require('../store')

const indexSessions = function () {
  return $.ajax({
    // debugger
    url: config.apiUrl + '/sessions/'
  });
}

const showSession = function (id) {
  return $.ajax({
    url: config.apiUrl + '/sessions/' + id,
    method: 'GET'
  })
}

const destroySession = function (id) {
  return $.ajax({
    url: config.apiUrl + '/sessions/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateDoctor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/doctors/' + data.doctor.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createDoctor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/doctors',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  });
}

const createSession = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sessions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  });
}

module.exports = {
  indexSessions,
  showSession,
  destroySession,
  updateDoctor,
  createDoctor,
  createSession
}






// const getDoctorById = function (id) {
//   return $.ajax({
//     // debugger
//     url: config.apiUrl + '/doctors/' + id,
//     method: 'GET',
//     contentType: "application/json",
//     dataType: "json",
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   });
// }
// const getSessionById = function (id) {
//   return $.ajax({
//     // debugger
//     url: config.apiUrl + '/sessions/' + id,
//     method: 'GET',
//     contentType: "application/json",
//     dataType: "json",
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   });
// }



