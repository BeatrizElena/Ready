'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)
// const logic = require('./logic-game')

const onGetDoctors = function (event) {
  event.preventDefault()
  api.indexDoctors()
    .then(ui.onSuccess)
    .catch(ui.onError)
}

const onGetOneDoctor = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const doctor = data.doctor
  if (doctor.id.length !== 0) {
    api.showDoctor(doctor.id)
      .then(ui.onGetOneDoctorSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a doctor id!')
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
  $('#see-all-doctors').on('click', onGetDoctors)
  $('#search-one-doctor').on('submit', onGetOneDoctor)
  $('#create-doctors').on('submit', onCreateDoctor)
  $('#create-sessions').on('submit', onCreateSession)
  $('#doctor-update').on('submit', onUpdateDoctor)
  $('#delete-one-doctor').on('submit', onDeleteDoctor)
}

module.exports = {
  addHandlers
}
