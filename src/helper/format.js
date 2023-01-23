const Format = {
  error: (code, data, message) => ({
    code,
    data: data || null,
    message,
  }),
  success: (data, message) => ({
    code: 200,
    data: data || null,
    message: message || "OK",
  }),
  notFound: (data, message) => ({
    code: 404,
    data: data || null,
    message: message || "Not found",
  }),

  internalError: (error, message) => ({
    code: 500,
    data: null,
    error: `${error}`,
    message: message || "Internal Server Error",
  }),
};

module.exports.Format = Format;
