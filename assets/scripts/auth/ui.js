'use strict'

const store = require('../store')
// const logic = require('../logic')

const signUpSuccess = function (data) {
  $("#sign-up").hide()
  // console.log(`signUpSuccess ran. Data is: ${data}`)
  $('#message').text('Sign-up was successful')

  // 5 seconds after the message appears, clear it
  setTimeout(() => $('#message').text(''), 5000)
}

const signInSuccess = function (data) {
  // console.log(`signInSuccess ran. Data is: ${data}`)
  store.user = data.user
  $("#sign-up").hide()
  $("#sign-in").hide()
  $("#sign-in-message").hide()
  $('.navbar-collapse').fadeIn()
  $('.doctor-wrapper').fadeIn()
  // console.log('signInSuccess ran. store.user is: ')
  // console.log(store.user)
}

const signOutSuccess = function (data) {
  store.user = null
  $('.doctor-wrapper').hide()
  $('.navbar-collapse').empty()
  $("#sign-up").fadeIn()
  $("#sign-in").fadeIn()
  // empty values from sign-in/sign-up fields
  $("input[type=text], input[type=password], textarea").val("")
  // console.log(`signOutSuccess ran.`)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password change was successful')

  // 5 seconds after the message appears, clear it
  setTimeout(() => $('#message').text(''), 5000)
}

const signUpFailure = function (error) {
  $('#message').text('Error on Sign-up')
  $('#message').css('background-color', 'red')
  $('#message').fadeOut()
  // console.log(`signUpFailure ran. Error is: ${error}`)
}

const signInFailure = function (error) {
  $('#message').text('Error on Sign-In')
  $('#message').css('background-color', 'red')
  $('#message').fadeOut()
  // console.log(`signInFailure ran. Error is: `)
  // console.log(error)
}

const changePasswordFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').css('background-color', 'red')
  $('#message').fadeOut()
  // console.log(`changePasswordFailure ran. Error is: `)
  // console.log(error)
}

const signOutFailure = function (error) {
  $('#message').text('Error on Sign-out')
  $('#message').css('background-color', 'red')
  $('#message').fadeOut()
  // console.log(`signOutFailure ran. Error is: `)
  // console.log(error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  changePasswordFailure,
  signOutFailure
}
