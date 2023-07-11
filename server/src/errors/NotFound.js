const BaseError = require('./BaseError')

class NotFound extends BaseError {
  constructor(message) {
    super(message ?? 'Não foram encontradas informações para o referente id.')
  }
}

module.exports = NotFound
