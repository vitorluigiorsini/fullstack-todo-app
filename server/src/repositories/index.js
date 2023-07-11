const TaskRepository = require('./TaskRepository')
const UserRepository = require('./UserRepository')

const taskRepository = new TaskRepository()
const userRepository = new UserRepository()

module.exports = { taskRepository, userRepository }
