'use strict';

const mock = require('egg-mock');

describe('test/rethinkdbdash.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/rethinkdbdash-test',
    });
    return app.ready();
  });

  // initialize test data
  beforeEach(async () => {
    await app.rethinkdbdash.tableCreate('users').run();
    await app.rethinkdbdash.table('users').insert({
      name: 'mario',
    });
  });

  afterEach(async () => {
    await app.rethinkdbdash.tableDrop('users').run();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect([ 'mario' ])
      .expect(200);
  });
});
