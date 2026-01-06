const app = require('./app') // the actual Express application
const { CONFIG, LOGGER } = require('./utils')

// app.use(requestLogger)

app.listen(CONFIG.PORT, () => {
  LOGGER.info(`Server running on port ${CONFIG.PORT}`)
})

