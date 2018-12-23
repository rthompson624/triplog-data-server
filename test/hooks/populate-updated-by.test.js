const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const populateUpdatedBy = require('../../src/hooks/populate-updated-by');

describe('\'populateUpdatedBy\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: populateUpdatedBy()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
