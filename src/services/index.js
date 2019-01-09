const users = require('./users/users.service.js');
const trips = require('./trips/trips.service.js');
const triplogs = require('./triplogs/triplogs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(trips);
  app.configure(triplogs);
};
