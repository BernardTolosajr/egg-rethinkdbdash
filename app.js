'use strict';

const r = require('./lib/rethinkdbdash');

module.exports = app => {
  if (app.config.rethinkdbdash.app) r(app);
};
