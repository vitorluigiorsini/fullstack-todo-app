class BaseError extends Error {
  constructor(message) {
    super(message)
    this.name = new.target.name
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

module.exports = BaseError
