'use strict'

const store = require('../store')

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.doctor) {
    console.log(data.doctor)
  } else {
    console.log(data.doctors)
    store.doctors = data.doctors
    console.log(store)
  }
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
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess
}
