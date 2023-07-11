const express = require('express')
const cors = require('cors')

require('dotenv').config()

const sequelize = require('./config/database')
const router = require('./src/routes')
const PORT = process.env.PORT || 3333

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Rotas
app.get('/', (req, res) => {
  res.send('API do Todo List')
})

app.use('/api', router)

// Iniciar servidor
const startServer = async () => {
  try {
    await sequelize.sync().then(() => {
      console.log('Connected to database')
    })
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

startServer()
