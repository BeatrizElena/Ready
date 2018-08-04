'use strict'

const api = require('./api')
const ui = require('./ui')
// const store = require('../store')
const getFormFields = require(`../../../lib/get-form-fields`)
// const logic = require('./logic-game')

const onGetSessions = function (event) {
  event.preventDefault()
  api.indexSessions()
    .then(ui.onGetAllSessionsSuccess)
    .then(ui.onShowSuccess)
    .catch(ui.onShowError)
}

const onGetDoctors = function (event) {
  event.preventDefault()
  api.indexDoctors()
    .then(ui.onGetAllDoctorsSuccess)
    .then(ui.onShowSuccess)
    .catch(ui.onShowError)
}

const onGetOneSession = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const session = data.session

  for(let key in data.session) {
    if (key !== 'id') {
      delete data.session[key]
      api.showSession()
      .catch(ui.onGetOneSessionError)
    }
 }

  if (session.id.length !== 0) {
    api.showSession(session.id)
      .then(ui.onGetOneSessionSuccess)
      .then(ui.onShowSuccess)
      .catch(ui.onGetOneSessionError)
  }
}

const onCreateDoctor = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if ((data.doctor.first_name === '') || data.doctor.last_name === '' || data.doctor.clinic_affiliation === '') {
    $('#content').html('<p>Please complete the fields for First and Last Name and for Clinic Affiliation</p>')
    $('#content').css('background-color', 'red')
    return false
  }
  api.createDoctor(data)
    .then(ui.onCreateSuccess)
    .then(ui.onShowSuccess)
    .catch(ui.onShowError)
}

const onCreateSession = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.session.date_time = `${data.session.date} ${data.session.time}`
  delete data.session.date
  delete data.session.time
  console.log(data)
  if ((data.session.doctor_id === '') || data.session.notes === '' || data.session.date_time === '') {
    $('#add-session-content').html('<p>Please complete all fields</p>')
    $('#add-session-content').css('background-color', 'red')
    return false
  }
  api.createSession(data)
    .then(ui.onCreateSuccess)
    .then(ui.onShowSuccess)
    .catch(ui.onShowError)
}

const onUpdateSession = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.session.date_time = `${data.session.date} ${data.session.time}`
  delete data.session.date
  delete data.session.time
  const session = data.session

  for(let key in data.session) {
     if (data.session[key].trim().length == 0 && key !== 'id') {
       delete data.session[key]
     } else {
      ui.onUpdateError()
    }
  }
   
         
  if (session.id === '') {
    $('#update-one-session-content').html('<p>Session Id is required</p>')
    $('#update-one-session-content').css('background-color', 'red')
    return false
  }
  if (session.id.length !== 0) {
    api.updateSession(data)
      .then(ui.onUpdateSuccess)
      .then(ui.onShowSuccess)
      .catch(ui.onShowError)
  }
}

const onDeleteSession = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const session = data.session
  if (session.id.length !== 0) {
    api.destroySession(session.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteError)
  } else {
    $('#one-session-content').html('<p>Please provide a session id!</p>')
  }
}


// TO-DO: create session with notes and all doctors fields from one record
// const onCreateSession = function (event) {
//   event.preventDefault()

//   $('#session-container').fadeIn()

// }

const addHandlers = () => {
  $('#see-all-doctors').on('click', onGetSessions)
  $('#see-all-doctors-2').on('click', onGetDoctors)
  $('#search-one-doctor').on('submit', onGetOneSession)
  $('#create-doctors').on('submit', onCreateDoctor)
  $('#create-sessions').on('submit', onCreateSession)
  $('#doctor-update').on('submit', onUpdateSession)
  $('#delete-one-doctor').on('submit', onDeleteSession)
}

module.exports = {
  addHandlers
}
