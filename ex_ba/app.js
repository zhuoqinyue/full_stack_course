const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const { CONFIG, LOGGER, MIDDLEWARE } = require('./utils')
const { NOTEROUTER, USERROUTER, LOGINROUTER } = require('./controllers')

const app = express()

app.use(express.json())
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
)

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

LOGGER.info('connecting to', CONFIG.MONGODB_URI)

mongoose
  .connect(CONFIG.MONGODB_URI, { family: 4 })
  .then(() => {
    LOGGER.info('connected to MongoDB')
  })
  .catch((error) => {
    LOGGER.error('error connection to MongoDB:', error.message)
  })

// app.use(express.static('dist'))
app.use(express.json())
app.use(MIDDLEWARE.requestLogger)

app.use('/api/login', LOGINROUTER)
app.use('/api/users', USERROUTER)
app.use('/api/notes', NOTEROUTER)

app.use(MIDDLEWARE.unknownEndpoint)
app.use(MIDDLEWARE.errorHandler)

module.exports = app
