class TaskFindAllService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository
  }

  async execute(user) {
    const tasks = await this.taskRepository.findAll(user)
    return tasks
  }
}

module.exports = TaskFindAllService
