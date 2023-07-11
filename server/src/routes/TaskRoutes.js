const express = require('express')

const { taskController } = require('../controllers')

const TaskRoutes = express.Router()

// Listar todas as tarefas
TaskRoutes.get('/:user', taskController.findAll)

// Criar uma nova tarefa
TaskRoutes.post('/', taskController.create)

// Atualizar uma tarefa
TaskRoutes.put('/:id', taskController.update)

// Deletar uma tarefa
TaskRoutes.delete('/:id', taskController.delete)

module.exports = TaskRoutes
