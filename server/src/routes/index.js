const express = require('express')

const taskRoutes = require('./TaskRoutes')

const router = express.Router()

router.use('/tasks', taskRoutes)

module.exports = router
