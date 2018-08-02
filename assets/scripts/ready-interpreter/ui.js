'use strict'

const store = require('../store')

// const showDoctorsTemplate = require('../templates/ready-interpreter.handlebars')

const onSuccess = function (data) {
  $('#content').html('')
  // console.log('data is ', data)
  // console.log('data.sessions is ', data.sessions)
  if (!data) {
    $('#content').html('Either you deleted something, or something went wrong')
  } else if (data.session) {
    // console.log(data.doctor)
  } else {
    // console.log(data.doctors)
    store.session = data.session
    // console.log(store)

      // clear content div, in case something is already there
  $('#content').html('')

  data.sessions.forEach(session => {
    const sessionHTML = (`
      <p>Session ID: ${session.id}</p>
      <h4>Dr. ${session.doctor.first_name} ${session.doctor.last_name},  ${session.doctor.clinic_affiliation},  Main Phone:  ${session.doctor.phone_number}</h4>
      <p>Sub-Specialty - English: ${session.doctor.sub_specialty_english}</p>
      <p>Sub-Specialty - Spanish: ${session.doctor.sub_specialty_spanish}</p>
      <h6>My Notes</h6>
      <p>${session.notes}</p>
      <br>
    `)

    $('#content').append(sessionHTML)
  })
  }
}

const onGetOneSessionSuccess = function(data) {
  if (!data.session.id){
    $('#one-session-content').html('')
    $('#one-session-content').html(`Please enter a valid id`)
  } else {
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
}
}

const onError = function (response) {
  // console.error(response)
  $('#content').html('')
  $('#content').html(`${response}`)
}


const onDeleteSuccess = function () {
  $('#one-session-content').html('')
  $('#one-session-content').html('<p>Session was successfully deleted</p>')
}

const onUpdateSuccess = function (data) {
  // console.log('You successfully updated the doctor!')
  store.doctor = data.doctor
  $('#content').html('')
  const updateDoctorHTML = (`
    <p>ID: ${store.doctor.id}</p>
    <h4>Dr. ${store.doctor.first_name} ${store.doctor.last_name},  ${store.doctor.clinic_affiliation},  Main Phone:  ${store.doctor.phone_number}</h4>
    <p>Sub-Specialty - English: ${store.doctor.sub_specialty_english}</p>
    <p>Sub-Specialty - Spanish: ${store.doctor.sub_specialty_spanish}</p>
    <br>
  `)
  $('#content').append(updateDoctorHTML)
}

const onCreateSuccess = function (data) {
  // console.log('You successfully created a doctor!')
  store.session = data.session
  console.log(data)
  $('#session-content').html('')
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
  $('#session-content').append(createSessionHTML)
}



module.exports = {
  onSuccess,
  onGetOneSessionSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess
}