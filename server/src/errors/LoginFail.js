const BaseError = require('./BaseError')

class LoginFail extends BaseError {
  constructor(message) {
    super(message ?? 'Falha no login.')
  }
}

module.exports = LoginFail
