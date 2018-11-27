# gulp-jscs-stylish

> This repository and package is **no longer maintained**.
> If you're interested in changes, updates or security fixes, please create a fork!

[![NPM Version](https://img.shields.io/npm/v/gulp-jscs-stylish.svg?style=flat&label=NPM%20Version)](http://npm.im/gulp-jscs-stylish)
[![Build Status](https://img.shields.io/npm/dm/gulp-jscs-stylish.svg?style=flat)](http://npm.im/gulp-jscs-stylish)
[![MIT License](https://img.shields.io/npm/l/gulp-jscs-stylish.svg?style=flat&label=License)](http://opensource.org/licenses/MIT)

Stylish reporter for [gulp-jscs](https://github.com/jscs-dev/gulp-jscs), uses [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) to do the actual reporting:

![screenshot](screenshot.png)

Compared to the default output:

![screenshot](screenshot2.png)

## Install

```sh
$ npm i --save-dev gulp-jscs-stylish
```


## Usage

```js
var jscs = require('gulp-jscs');
var noop = function () {};
var stylish = require('gulp-jscs-stylish');

gulp.task('default', function () {
	gulp.src([ 'file.js' ])
		.pipe(jscs())      // enforce style guide
		.pipe(stylish());  // log style errors
});
```


## Combine results with those of JSHint

```js
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var noop = function () {};
var stylish = require('gulp-jscs-stylish');

gulp.task('default', function () {
	gulp.src([ 'file.js' ])
		.pipe(jshint())                           // hint (optional)
		.pipe(jscs())                             // enforce style guide
		.pipe(stylish.combineWithHintResults())   // combine with jshint results
		.pipe(jshint.reporter('jshint-stylish')); // use any jshint reporter to log hint
		                                          // and style guide errors
});
````
using `.pipe(jshint())` is optional. you may very well use the reporter without running jshint

## License

MIT © [Christoph Werner](http://twitter.com/gonsfx)
