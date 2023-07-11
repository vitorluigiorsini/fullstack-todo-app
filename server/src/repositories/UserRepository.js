const { User } = require('../models')

class UserRepository {
  async login(email) {
    const user = await User.findByPk(email)

    return user
  }

  async signup({ email, password }) {
    const user = await User.create({ email, password })

    return user
  }
}

module.exports = UserRepository
