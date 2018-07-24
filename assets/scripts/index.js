'use strict'

const authUsers = require('./auth/events')
const sessionEvents = require('./ready-interpreter/events')

$(() => {
  authUsers.addHandlers()
  sessionEvents.addHandlers()
})

