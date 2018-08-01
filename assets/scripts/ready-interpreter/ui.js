'use strict'

const store = require('../store')

// const showDoctorsTemplate = require('../templates/ready-interpreter.handlebars')

const onSuccess = function (data) {
  // console.log('data is ', data)
  // const showDoctorssHtml = showItemsTemplate({ items: data.items })
  // $('.content').append(showDoctorssHtml)
  if (!data) {
    // console.warn('Either you deleted something, or something went wrong.')
  } else if (data.doctor) {
    // console.log(data.doctor)
  } else {
    // console.log(data.doctors)
    store.doctors = data.doctors
    // console.log(store)

      // clear content div, in case something is already there
  $('#content').html('')

  data.doctors.forEach(doctor => {
    const doctorHTML = (`
      <p>ID: ${doctor.id}</p>
      <h4>Dr. ${doctor.first_name} ${doctor.last_name},  ${doctor.clinic_affiliation},  Main Phone:  ${doctor.phone_number}</h4>
      <p>Sub-Specialty - English: ${doctor.sub_specialty_english}</p>
      <p>Sub-Specialty - Spanish: ${doctor.sub_specialty_spanish}</p>
      <br>
    `)

    $('#content').append(doctorHTML)
  })
  }
}

const onGetOneDoctorSuccess = function(data) {
  if (!data.doctor.id){
    $('#content').html('')
    $('#content').html(`Please enter a valid id`)
  } else {
    $('#content').html('')
    // trying to clear see all doctors modal with line beow-not working yet!
    $('#seeAllDoctorsModal').html('')
  const oneDoctorHTML = (`
    <p>ID: ${data.doctor.id}</p>
    <h4>Dr. ${data.doctor.first_name} ${data.doctor.last_name},  ${data.doctor.clinic_affiliation},  Main Phone:  ${data.doctor.phone_number}</h4>
    <p>Sub-Specialty - English: ${data.doctor.sub_specialty_english}</p>
    <p>Sub-Specialty - Spanish: ${data.doctor.sub_specialty_spanish}</p>
    <br>
  `)
  $('#content').append(oneDoctorHTML)
  }
}

const onError = function (response) {
  // console.error(response)
  $('#content').html('')
  $('#content').html(`${response}`)
}


const onDeleteSuccess = function () {
  // console.log('Doctor was successfully deleted.')
  $('#content').html('')
  $('#content').html(`Doctor's profile was successfully deleted`)
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
  // console.log(data)
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

// const onCreateSuccess = function (data) {
//   // console.log('You successfully created a doctor!')
//   store.doctor = data.doctor
//   $('#content').html('')
//   const createDoctorHTML = (`
//     <p>ID: ${store.doctor.id}</p>
//     <h4>Dr. ${store.doctor.first_name} ${store.doctor.last_name},  ${store.doctor.clinic_affiliation},  Main Phone:  ${store.doctor.phone_number}</h4>
//     <p>Sub-Specialty - English: ${store.doctor.sub_specialty_english}</p>
//     <p>Sub-Specialty - Spanish: ${store.doctor.sub_specialty_spanish}</p>
//     <br>
//   `)
//   $('#content').append(createDoctorHTML)
// }

module.exports = {
  onSuccess,
  onGetOneDoctorSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess
}
