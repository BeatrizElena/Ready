'use strict'

const store = require('../store')

// const showDoctorsTemplate = require('../templates/ready-interpreter.handlebars')

const onSuccess = function (data) {
  console.log('data is ', data)
  // const showDoctorssHtml = showItemsTemplate({ items: data.items })
  // $('.content').append(showDoctorssHtml)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.doctor) {
    console.log(data.doctor)
  } else {
    console.log(data.doctors)
    store.doctors = data.doctors
    console.log(store)

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
  $('#content').html('')
  const oneDoctorHTML = (`
    <p>ID: ${data.doctor.id}</p>
    <h4>Dr. ${data.doctor.first_name} ${data.doctor.last_name},  ${data.doctor.clinic_affiliation},  Main Phone:  ${data.doctor.phone_number}</h4>
    <p>Sub-Specialty - English: ${data.doctor.sub_specialty_english}</p>
    <p>Sub-Specialty - Spanish: ${data.doctor.sub_specialty_spanish}</p>
    <br>
  `)
  $('#content').append(oneDoctorHTML)
}

const onError = function (response) {
  console.error(response)
}


const onDeleteSuccess = function () {
  console.log('Doctor was successfully deleted.')
}

const onUpdateSuccess = function () {
  console.log('You successfully updated the doctor!')
  $('#content').html('')
}

const onCreateSuccess = function () {
  console.log('You successfully created a doctor!')
  $('#content').html('You created a new doctor profile!')
  $('#content').css('background-color', 'green')
}

module.exports = {
  onSuccess,
  onGetOneDoctorSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess
}
