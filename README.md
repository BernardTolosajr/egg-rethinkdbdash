# egg-rethinkdbdash

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-rethinkdbdash.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-rethinkdbdash
[travis-image]: https://api.travis-ci.org/BernardTolosajr/egg-rethinkdbdash.svg?branch=master
[travis-url]: https://travis-ci.org/BernardTolosajr/egg-rethinkdbdash
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-rethinkdbdash.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-rethinkdbdash?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-rethinkdbdash.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-rethinkdbdash
[snyk-image]: https://snyk.io/test/npm/egg-rethinkdbdash/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-rethinkdbdash
[download-image]: https://img.shields.io/npm/dm/egg-rethinkdbdash.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-rethinkdbdash

[Egg](https://github.com/eggjs/egg/issues) rethinkdbdash plugin

## Install

```bash
$ npm i egg-rethinkdbdash --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.rethinkdbdash = {
  enable: true,
  package: 'egg-rethinkdbdash',
};
```

## Configuration

You need to put the rethinkdbdash config inside the client object.

```js
// {app_root}/config/config.default.js
module.exports = appInfo => {
  config.rethinkdbdash = {
    client: {
      host: 'localhost'
    }
  }
};
```

## How to access the rethinkdbdash

In controller, you can use this.app.rethinkdbdash to get the rethinkdbdash instance.

```js
// app/controller/home.js
class HomeController extends Controller {
  async index() {
    const smashers = await this.app.rethinkdbdash.table('smashers').run();
    this.ctx.body = smashers;
  }
}
```

see [rethinkdbdash](https://github.com/neumino/rethinkdbdash) for more detail.

## Example

[rethinkdbdash-example-api](https://github.com/BernardTolosajr/egg-rethinkdbdash-example)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
