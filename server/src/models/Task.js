const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const Task = sequelize.define(
  'Task',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dueDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userEmail: {
      type: DataTypes.STRING,
      references: {
        model: 'User',
        key: 'email'
      },
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
)

module.exports = Task
