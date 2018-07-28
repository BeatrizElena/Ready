'use strict'

const authUsers = require('./auth/events')
const sessionEvents = require('./ready-interpreter/events')

$(() => {
  $('.doctor-wrapper').hide()
  authUsers.addHandlers()
  sessionEvents.addHandlers()
})

