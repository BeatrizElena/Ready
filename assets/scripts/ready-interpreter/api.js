'use strict'

const config = require('../config')
const store = require('../store')

const indexDoctors = function () {
  return $.ajax({
    url: config.apiUrl + '/doctors',
    method: 'GET'
  })
}

const indexSessions = function () {
  return $.ajax({
    // debugger
    url: config.apiUrl + '/sessions/'
  });
}

const showDoctor = function (id) {
  return $.ajax({
    url: config.apiUrl + '/doctors/' + id,
    method: 'GET'
  })
}

const destroyDoctors = function (id) {
  return $.ajax({
    url: config.apiUrl + '/doctors/' + id,
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
  indexDoctors,
  indexSessions,
  showDoctor,
  destroyDoctors,
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



