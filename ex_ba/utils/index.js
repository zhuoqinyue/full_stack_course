const config = require('./config')
const logger = require('./logger')
const middleware = require('./middleware')

module.exports = {
  CONFIG: config,
  LOGGER: logger,
  MIDDLEWARE: middleware,
}
