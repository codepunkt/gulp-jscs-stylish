# gulp-jscs-stylish

Stylish reporter for [gulp-jscs](https://github.com/jscs-dev/gulp-jscs), uses [jshint-stylish](https://github.com/sindresorhus/jshint-stylish) to do the actual reporting.

![screenshot](screenshot.png)

## Install

```sh
$ npm i --save-dev gulp-jscs-stylish
```


## Usage

```js
var stylish = require('gulp-jscs-stylish');
var noop = function () {};

gulp.task('default', function () {
	gulp.src([ 'file.js' ])
		.pipe(jscs())         // enforce style guide
		.on('error', noop)    // don't stop on error
		.pipe(jscsStylish()); // log style errors
});
```


## License

MIT © [Christoph Werner](http://twitter.com/gonsfx)
