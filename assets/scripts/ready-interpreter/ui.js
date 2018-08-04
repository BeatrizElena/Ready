'use strict'

const store = require('../store')

// const showDoctorsTemplate = require('../templates/ready-interpreter.handlebars')

const onGetAllSessionsSuccess = function (data) {
  $('#see-all-content').html('')
  // console.log('data is ', data)
  // data returns all sessions created by any user
  if (!data) {
    $('#see-all-content').html('Either you deleted something, or something went wrong')
  } else {
    data
    // clear content div, in case something is already there
    $('#see-all-content').html('')
    data.sessions.forEach(session => {
      const sessionHTML = (`
        <p>Session ID: ${session.id}, Doctor ID: ${session.doctor.id}</p>
        <h4>Dr. ${session.doctor.first_name} ${session.doctor.last_name},  ${session.doctor.clinic_affiliation},  Main Phone:  ${session.doctor.phone_number}</h4>
        <p>Sub-Specialty - English: ${session.doctor.sub_specialty_english}</p>
        <p>Sub-Specialty - Spanish: ${session.doctor.sub_specialty_spanish}</p>
        <h6>My Notes</h6>
        <p>${session.notes}</p>
        <br>
      `)
      $('#see-all-content').append(sessionHTML)
  })
  }
}

const onGetAllDoctorsSuccess = function (data) {
  $('#see-all-content').html('')
  // console.log('data is ', data)
  // data returns all sessions created by any user
  if (!data) {
    $('#see-all-content').html('Either you deleted something, or something went wrong')
  } else {
    data
    // clear content div, in case something is already there
    $('#see-all-content').html('')
    data.doctors.forEach(doctor => {
      const doctorHTML = (`
        <p>Doctor ID: ${doctor.id}</p>
        <h4>Dr. ${doctor.first_name} ${doctor.last_name},  ${doctor.clinic_affiliation},  Main Phone:  ${doctor.phone_number}</h4>
        <p>Sub-Specialty - English: ${doctor.sub_specialty_english}</p>
        <p>Sub-Specialty - Spanish: ${doctor.sub_specialty_spanish}</p>
      `)
      $('#see-all-content').append(doctorHTML)
  })
  }
}

const onGetOneSessionSuccess = function(data) {
  $('#one-session-content').html('')
  const oneSessionHTML = (`
    <p>ID: ${data.session.id}</p>
    <p>Date: ${data.session.date_time}</p>
    <p>Session ID: ${data.session.id}, Doctor ID: ${data.session.doctor_id}</p>
    <h5>${data.session.doctor.first_name} ${data.session.doctor.last_name}, ${data.session.doctor.clinic_affiliation}</h5>
    <h6>Phone Number: ${data.session.doctor.phone_number}</h6>
    <p>${data.session.doctor.sub_specialty_english}</p>
    <p>${data.session.doctor.sub_specialty_spanish}</p>
    <h6>My Notes</h6>
    <p>${data.session.notes}</p>
  `)
  $('#one-session-content').append(oneSessionHTML)
  // empty values from form fields
  $("input[type=text], input[type=date], input[type=time], textarea").val("")

}

const onGetOneSessionError = function () {
  $('#one-session-content').html('<p>Something went wrong. Perhaps you didn\'t enter a valid id.</p>')
// empty values from form fields
$("input[type=text], textarea").val("")
}


const onDeleteSuccess = function () {
    $('#delete-content').html('<p>Session was successfully deleted</p>')
  // empty values from form fields
  $("input[type=text], textarea").val("")
  }

  const onDeleteError = function () {
    $('#delete-content').html('<p>Something went wrong. Perhaps you didn\'t enter a valid id.</p>')
  // empty values from form fields
  $("input[type=text], textarea").val("")
  }

const onUpdateSuccess = function (data) {
  // console.log('You successfully updated the doctor!')
  store.session = data.session
  $('#update-one-session-content').html('')
  const updateSessionHTML = (`
    <p>Session ID: ${store.session.id}, Doctor ID: ${store.session.doctor.id}</p>
    <h4>Dr. ${store.session.doctor.first_name} ${store.session.doctor.last_name},  ${store.session.doctor.clinic_affiliation},  Main Phone:  ${store.session.doctor.phone_number}</h4>
    <p>Sub-Specialty - English: ${store.session.doctor.sub_specialty_english}</p>
    <p>Sub-Specialty - Spanish: ${store.session.doctor.sub_specialty_spanish}</p>
    <p>Notes: ${store.session.notes}</p>
    <br>
  `)
  $('#update-one-session-content').append(updateSessionHTML)
}

const onUpdateError = function () {
  $('#update-one-session-content').html('<p>Something went wrong. Perhaps you didn\'t enter a valid id.</p>')
// empty values from form fields
$("input[type=text], textarea").val("")
}

const onCreateSuccess = function (data) {
  // console.log('You successfully created a doctor!')
  store.session = data.session
  // console.log(data)
  $('#add-session-content').html('')
  const createSessionHTML = (`
    <p>Date: ${store.session.date_time}</p>
    <p>Session ID: ${store.session.id}, Doctor ID: ${store.session.doctor_id}</p>
    <h5>${store.session.doctor.first_name} ${store.session.doctor.last_name}, ${store.session.doctor.clinic_affiliation}</h5>
    <h6>Phone Number: ${store.session.doctor.phone_number}</h6>
    <p>${store.session.doctor.sub_specialty_english}</p>
    <p>${store.session.doctor.sub_specialty_spanish}</p>
    <h6>My Notes</h6>
    <p>${store.session.notes}</p>
  `)
  $('#add-session-content').append(createSessionHTML)
  // empty values from form fields
  $("input[type=text], textarea").val("")
}

const onCreateError = function () {
  $('#add-session-content').html('<p>Something went wrong. Perhaps you didn\'t enter a valid doctor id. Also, please complete all fields.</p>')
// empty values from form fields
$("input[type=text], textarea").val("")
}


// const onShowError = e => {
//   e.preventDefault()
//   returnMsgError.removeClass()
//   returnMsgError.addClass('error')
//   setTimeout(() => {
//      returnMsgError.removeClass()
//   }, 3000)
// }

// const onShowSuccess = e => {
//   e.preventDefault()
//   returnMsgSuccess.removeClass()
//   returnMsgSuccess.addClass('success')
//   setTimeout(() => {
//      returnMsgSuccess.removeClass()
//   }, 3000)
// }


module.exports = {
  onGetAllSessionsSuccess,
  onGetAllDoctorsSuccess,
  onGetOneSessionSuccess,
  onGetOneSessionError,
  onDeleteSuccess,
  onDeleteError,
  onUpdateSuccess,
  onUpdateError,
  onCreateSuccess,
  onCreateError
  // onShowError,
  // onShowSuccess
}