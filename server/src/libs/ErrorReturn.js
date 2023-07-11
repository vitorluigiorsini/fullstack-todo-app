const { NotFound, BadRequest, LoginFail } = require('../errors')
const { formatJSONResponse } = require('./FormatJsonResponse')

const returnError = (e) => {
  console.error(e)
  if (e instanceof BadRequest) {
    return formatJSONResponse(
      {
        error: e.message
      },
      400
    )
  }
  if (e instanceof LoginFail) {
    return formatJSONResponse(
      {
        error: e.message
      },
      403
    )
  }
  if (e instanceof NotFound) {
    return formatJSONResponse(
      {
        error: e.message
      },
      404
    )
  }
  if (e instanceof Error) {
    return formatJSONResponse(
      {
        error: e.message
      },
      500
    )
  }

  return formatJSONResponse(
    {
      error: 'Erro interno do servidor.'
    },
    500
  )
}

module.exports = { returnError }
