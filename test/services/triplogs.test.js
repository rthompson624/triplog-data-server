const assert = require('assert');
const app = require('../../src/app');

describe('\'triplogs\' service', () => {
  it('registered the service', () => {
    const service = app.service('triplogs');

    assert.ok(service, 'Registered the service');
  });
});
