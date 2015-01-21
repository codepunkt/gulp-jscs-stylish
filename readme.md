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
var stylish = require('gulp-jscs-stylish');
var noop = function () {};

gulp.task('default', function () {
	gulp.src([ 'file.js' ])
		.pipe(jscs())      // enforce style guide
		.on('error', noop) // don't stop on error
		.pipe(stylish());  // log style errors
});
```


## License

MIT © [Christoph Werner](http://twitter.com/gonsfx)
