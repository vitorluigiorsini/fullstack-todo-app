const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { LoginFail } = require('../../errors')

class UserLoginService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async execute({ email, password }) {
    const user = await this.userRepository.login(email)

    if (!user) {
      throw new LoginFail()
    }

    const success = await bcrypt.compare(password, user.password)
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' })
    if (success) {
      return { email: user.email, token: token }
    } else {
      throw new LoginFail()
    }
  }
}

module.exports = UserLoginService
