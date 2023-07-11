const { taskRepository } = require('../repositories')
const {
  TaskFindAllService,
  TaskCreateService,
  TaskUpdateService,
  TaskDeleteService
} = require('../services/tasks')

class TaskController {
  async findAll(request, response) {
    const { user } = request.params
    const taskFindAllService = new TaskFindAllService(taskRepository)
    try {
      const tasks = await taskFindAllService.execute(user)

      return response.status(200).json(tasks)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao buscar as tarefas.' })
    }
  }

  async create(request, response) {
    const { title, completed, description, dueDate, priority, userEmail } =
      request.body

    const taskCreateService = new TaskCreateService(taskRepository)

    try {
      const task = await taskCreateService.execute({
        title,
        completed,
        description,
        dueDate,
        priority,
        userEmail
      })

      return response.status(201).json(task)
    } catch (error) {
      return response
        .status(500)
        .json({ error: 'Erro ao criar uma nova tarefa!' })
    }
  }

  async update(request, response) {
    const { title, completed, description, dueDate, priority } = request.body
    const { id } = request.params

    const taskUpdateService = new TaskUpdateService(taskRepository)

    try {
      const updatedTask = await taskUpdateService.execute({
        id,
        title,
        completed,
        description,
        dueDate,
        priority
      })

      return response.status(200).json(updatedTask)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao atualizar a tarefa.' })
    }
  }

  async delete(request, response) {
    const { id } = request.params

    const taskDeleteService = new TaskDeleteService(taskRepository)

    try {
      await taskDeleteService.execute(id)

      return response.sendStatus(204)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao deletar a tarefa.' })
    }
  }
}

module.exports = TaskController
