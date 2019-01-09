const { authenticate } = require('@feathersjs/authentication').hooks;
const populateUpdatedBy = require('../../hooks/populate-updated-by');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [populateUpdatedBy()],
    update: [populateUpdatedBy()],
    patch: [populateUpdatedBy()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
