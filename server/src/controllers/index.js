const TaskController = require('./TaskController')
const UserController = require('./UserController')

const taskController = new TaskController()
const userController = new UserController()

module.exports = { taskController, userController }
