# gulp-jscs-stylish

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
		.on('error', noop) // don't stop on error
		.pipe(stylish());  // log style errors
});
```


## Combine with JSHint

```js
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var noop = function () {};
var stylish = require('gulp-jscs-stylish');

gulp.task('default', function () {
	gulp.src([ 'file.js' ])
		.pipe(jshint())                           // hint
		.pipe(jscs())                             // enforce style guide
		.on('error', noop)                        // don't stop on error
		.pipe(stylish.combineWithHintResults())   // log style errors
		.pipe(jshint.reporter('jshint-stylish')); // log hint and style guide errors
});
````

## License

MIT © [Christoph Werner](http://twitter.com/gonsfx)
