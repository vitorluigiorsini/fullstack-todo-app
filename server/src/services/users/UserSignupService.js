const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { LoginFail } = require('../../errors')

class UserSignupService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async execute({ email, password }) {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const user = await this.userRepository.login(email)
    if (user) throw new LoginFail('Este usuário já existe!')

    const signedUpUser = await this.userRepository.signup({
      email,
      password: hashedPassword
    })
    const token = jwt.sign({ email: signedUpUser.email }, 'secret', {
      expiresIn: '1hr'
    })
    return { email: user.email, token: token }
  }
}

module.exports = UserSignupService
