class TaskUpdateService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository
  }

  async execute({ id, title, completed, description, dueDate, priority }) {
    const taskFound = await this.taskRepository.findByPk(id)
    taskFound.title = title ?? taskFound.title
    taskFound.completed = completed ?? taskFound.completed
    taskFound.description = description ?? taskFound.description
    taskFound.dueDate = dueDate ?? taskFound.dueDate
    taskFound.priority = priority ?? taskFound.priority

    const updatedTask = await this.taskRepository.update(taskFound)
    return updatedTask
  }
}

module.exports = TaskUpdateService
