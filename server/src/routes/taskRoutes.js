const express = require('express')

const { Task } = require('../models')
const router = express.Router()

// Listar todas as tarefas
router.get('/tasks/:user', async (req, res) => {
  const { user } = req.params
  try {
    const tasks = await Task.findAll({ where: { userEmail: user } })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as tarefas.' })
  }
})

// Criar uma nova tarefa
router.post('/tasks', async (req, res) => {
  const { title, completed, description, dueDate, priority, userEmail } =
    req.body
  try {
    const task = await Task.create({
      title,
      completed,
      description,
      dueDate,
      priority,
      userEmail
    })
    res.status(201).json(task)
  } catch (error) {
    // res.status(500).json({ error: 'Erro ao criar uma nova tarefa!' })
    res.status(500).json(error)
  }
})

// Atualizar uma tarefa
router.put('/tasks/:id', async (req, res) => {
  const { id } = req.params
  const { title, completed, description, dueDate, priority } = req.body
  try {
    const task = await Task.findByPk(id)
    if (!task) {
      res.status(404).json({ error: 'Tarefa não encontrada.' })
    } else {
      task.title = title
      task.completed = completed
      task.description = description
      task.dueDate = dueDate
      task.priority = priority
      await task.save()
      res.json(task)
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a tarefa.' })
  }
})

// Deletar uma tarefa
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params
  try {
    const task = await Task.findByPk(id)
    if (!task) {
      res.status(404).json({ error: 'Tarefa não encontrada.' })
    } else {
      await task.destroy()
      res.sendStatus(204)
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar a tarefa.' })
  }
})

module.exports = router
