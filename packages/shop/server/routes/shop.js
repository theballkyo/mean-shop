'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Shop, app, auth, database) {

  app.get('/shop/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/shop/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/shop/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/shop/example/render', function(req, res, next) {
    Shop.render('index', {
      package: 'shop'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
