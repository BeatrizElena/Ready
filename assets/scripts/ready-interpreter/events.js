'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)
// const logic = require('./logic-game')

const onGetSessions = function (event) {
  event.preventDefault()
  api.indexSessions()
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const onGetOneSession = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const session = data.session
  if (session.id.length !== 0) {
    api.showSession(session.id)
      .then(ui.onGetOneSessionSuccess)
      .catch(ui.onError)
  } else {
    $('#one-session-content').html('<p>Please provide a session id!</p>')
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
    .catch(ui.onError)
}

const onCreateSession = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  data.session.date_time = `${data.session.date} ${data.session.time}`
  delete data.session.date
  delete data.session.time
  console.log(data)
  if ((data.session.doctor_id === '') || data.session.notes === '' || data.session.date_time === '') {
    $('#content').html('<p>Please complete all fields</p>')
    $('#content').css('background-color', 'red')
    return false
  }
  api.createSession(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const onUpdateDoctor = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const doctor = data.doctor
  if (doctor.id === '') {
    $('#content').html('<p>Id is required</p>')
    $('#content').css('background-color', 'red')
    return false
  }
  if (doctor.id.length !== 0) {
    api.updateDoctor(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a doctor id!')
  }
}

const onDeleteDoctor = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const doctor = data.doctor
    api.destroyDoctors(doctor.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onError)
  }


// TO-DO: create session with notes and all doctors fields from one record
// const onCreateSession = function (event) {
//   event.preventDefault()

//   $('#session-container').fadeIn()

// }

const addHandlers = () => {
  $('#see-all-doctors').on('click', onGetSessions)
  $('#search-one-doctor').on('submit', onGetOneSession)
  $('#create-doctors').on('submit', onCreateDoctor)
  $('#create-sessions').on('submit', onCreateSession)
  $('#doctor-update').on('submit', onUpdateDoctor)
  $('#delete-one-doctor').on('submit', onDeleteDoctor)
}

module.exports = {
  addHandlers
}
