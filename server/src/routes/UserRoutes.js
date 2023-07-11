const express = require('express')

const { userController } = require('../controllers')

const UserRoutes = express.Router()

// Login
UserRoutes.post('/login', userController.login)

// Registrar um novo usuário
UserRoutes.post('/signup', userController.signup)

module.exports = UserRoutes
