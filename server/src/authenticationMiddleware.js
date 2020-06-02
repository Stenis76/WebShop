const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
};

exports.isAuthenticated = isAuthenticated;
