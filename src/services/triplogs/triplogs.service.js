// Initializes the `triplogs` service on path `/triplogs`
const createService = require('feathers-sequelize');
const createModel = require('../../models/triplogs.model');
const hooks = require('./triplogs.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/triplogs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('triplogs');

  service.hooks(hooks);
};
