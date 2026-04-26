const requestTime = (req, res, next) => {
  req.time = new Date().toISOString();
  next();
};

export default requestTime;
