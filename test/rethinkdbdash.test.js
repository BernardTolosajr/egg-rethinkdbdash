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

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, rethinkdbdash')
      .expect(200);
  });
});
