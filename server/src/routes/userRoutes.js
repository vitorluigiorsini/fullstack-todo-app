const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../models')
const router = express.Router()

// Registrar um novo usuário
router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)
  try {
    const user = await User.findByPk(email)

    if (user) return res.status(403).json({ detail: 'Este usuário já existe!' })

    const signedUpUser = await User.create({ email, password: hashedPassword })
    console.log(signedUpUser)
    const token = jwt.sign({ email: signedUpUser.email }, 'secret', {
      expiresIn: '1hr'
    })

    res.status(201).json({ email: signedUpUser.email, token: token })
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar um novo usuário.' })
  }
})

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findByPk(email)

    if (!user)
      return res.status(404).json({ detail: 'Usuário não encontrado!' })

    const success = await bcrypt.compare(password, user.password)
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })

    if (success) {
      res.json({ email: user.email, token: token })
    } else {
      res.status(403).json({ detail: 'Falha no login' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao tentar logar.' })
  }
})

module.exports = router
