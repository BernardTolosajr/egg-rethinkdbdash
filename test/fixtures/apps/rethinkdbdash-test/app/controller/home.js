'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const users = await this.app.rethinkdbdash.table('users').run();
    this.ctx.body = users.map(user => (user.name));
  }
}

module.exports = HomeController;
