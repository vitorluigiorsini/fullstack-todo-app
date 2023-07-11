const express = require('express')

const taskRoutes = require('./TaskRoutes')
const userRoutes = require('./UserRoutes')

const router = express.Router()

router.use('/tasks', taskRoutes)
router.use('/users', userRoutes)

module.exports = router
