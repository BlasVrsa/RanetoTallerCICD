function mw_authenticate_read_access(config) {
  if (
    config.authentication === true &&
    config.authentication_for_edit === false
  ) {
    return function (req, res, next) {
      if (!req.session.loggedIn) {
        if (
          req.path === '/rn-login' ||
          req.path === '/logout' ||
          req.path === '/login'
        ) {
          return next();
        }
        return res.redirect(403, `${config.base_url}/login`);
      }
      return next();
    };
  }
  // No Authentication Required
  return function (req, res, next) {
    return next();
  };
}

// Exports
export default mw_authenticate_read_access;
