const formatJSONResponse = (response, statusCode) => {
  return {
    body: response,
    statusCode: statusCode ?? 200
  }
}

module.exports = { formatJSONResponse }
