const { userRepository } = require('../repositories')
const { UserLoginService, UserSignupService } = require('../services/users')
const { returnError } = require('../libs/ErrorReturn')

class UserController {
  async login(request, response) {
    const { email, password } = request.body
    const userLoginService = new UserLoginService(userRepository)
    try {
      const user = await userLoginService.execute({
        email,
        password
      })
      return response.status(200).json(user)
    } catch (error) {
      const err = returnError(error)
      return response.status(err.statusCode).json(err.body)
    }
  }

  async signup(request, response) {
    const { email, password } = request.body
    const userSignupService = new UserSignupService(userRepository)
    try {
      const user = await userSignupService.execute({ email, password })

      return response.status(200).json(user)
    } catch (error) {
      const err = returnError(error)
      return response.status(err.statusCode).json(err.body)
    }
  }
}

module.exports = UserController
