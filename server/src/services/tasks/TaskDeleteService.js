class TaskDeleteService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository
  }

  async execute(id) {
    await this.taskRepository.delete(id)
    return
  }
}

module.exports = TaskDeleteService
