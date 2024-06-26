function route_login_page(config) {
  return function (req, res) {
    return res.render('login', {
      config,
      layout: null,
      lang: config.lang,
      rtl_layout: config.rtl_layout,
      googleoauth: config.googleoauth,
    });
  };
}

// Exports
export default route_login_page;
