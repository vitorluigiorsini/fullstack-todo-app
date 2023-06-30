const User = require('./User')
const Task = require('./Task')

Task.belongsTo(User, {
  foreignKey: { name: 'userEmail' },
  keyType: 'string'
})

module.exports = { Task, User }
