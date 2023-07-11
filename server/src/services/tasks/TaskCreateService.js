class TaskCreateService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository
  }

  async execute({
    title,
    completed,
    description,
    dueDate,
    priority,
    userEmail
  }) {
    const task = await this.taskRepository.create({
      title,
      completed,
      description,
      dueDate,
      priority,
      userEmail
    })
    return task
  }
}

module.exports = TaskCreateService
