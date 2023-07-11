const BaseError = require('./BaseError')

class BadRequest extends BaseError {
  constructor(message) {
    super(message ?? 'Inconsistência nos dados enviados.')
  }
}

module.exports = BadRequest
