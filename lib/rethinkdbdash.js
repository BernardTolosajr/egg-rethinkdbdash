'use strict';

module.exports = app => {
  app.addSingleton('rethinkdbdash', createClient);
};

function createClient(config, app) {
  let { host, port } = config;

  host = host || 'localhost';
  port = port || 28015;

  app.coreLogger.info('[egg-rethinkdbdash] connecting %s:%s', host, port);

  const client = require('rethinkdbdash')(config);

  app.beforeStart(async () => {
    app.coreLogger.info('[egg-rethinkdbdash] starting...');

    const poolLenth = client.getPoolMaster().getLength();

    app.coreLogger.info('[egg-rethinkdbdash] PoolMaster count is %s', poolLenth);
  });
  return client;
}
