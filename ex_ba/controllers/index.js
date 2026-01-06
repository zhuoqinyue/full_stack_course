const notesRouter = require('./note')
const usersRouter = require('./user')
const loginRouter = require('./login')

module.exports = {
  NOTEROUTER: notesRouter,
  USERROUTER: usersRouter,
  LOGINROUTER: loginRouter,
}
