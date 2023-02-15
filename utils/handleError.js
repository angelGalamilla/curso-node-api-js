const handleHttpError = (res, message = "Algo paso, no se nada", code = 403) => {
  res.status(code);
  res.send({error: message});
};

module.exports = { handleHttpError };