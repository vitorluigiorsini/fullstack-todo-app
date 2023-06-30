const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const User = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
)

module.exports = User
