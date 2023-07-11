const { Task } = require('../models')

class TaskRepository {
  async findAll(user) {
    const tasks = await Task.findAll({
      where: { userEmail: user }
    })

    return tasks
  }

  async create({
    title,
    completed,
    description,
    dueDate,
    priority,
    userEmail
  }) {
    const task = await Task.create({
      title,
      completed,
      description,
      dueDate,
      priority,
      userEmail
    })

    return task
  }

  async update(taskToUpdate) {
    const updatedTask = await Task.update(
      {
        title: taskToUpdate.title,
        completed: taskToUpdate.completed,
        description: taskToUpdate.description,
        dueDate: taskToUpdate.dueDate,
        priority: taskToUpdate.priority
      },
      {
        where: { id: taskToUpdate.id }
      }
    )

    return updatedTask
  }

  async findByPk(id) {
    const taskFound = await Task.findByPk(id)

    return taskFound
  }

  async delete(id) {
    await Task.destroy({ where: { id: id } })
  }
}

module.exports = TaskRepository
