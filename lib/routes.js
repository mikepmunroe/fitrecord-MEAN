'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    lifts = require('./controllers/lifts'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.param('liftId', lifts.lift);

  app.post('/api/lifts', lifts.create);
  app.get('/api/lifts', lifts.query);
  app.get('/api/lifts/:liftId', lifts.show);
  app.put('/api/lifts/:liftId', lifts.update);
  app.del('/api/lifts/:liftId', lifts.remove);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};
