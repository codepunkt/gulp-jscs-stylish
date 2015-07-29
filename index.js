var tap = require('gulp-tap');
var stylish = typeof require('jshint-stylish') === 'string' ? require(require('jshint-stylish')) : require('jshint-stylish');

function byErrorLine (a, b) {
	return a.error.line - b.error.line;
}

function tapJscs (action) {
	return function () {
		return tap(function (file) {
			if (!file.jscs || file.jscs.success) {
				return;
			}
			action(file);
		});
	};
}

function toJshint (file) {
	return file.jscs.errors.map(function (error) {
		return {
			file: file.base + error.filename,
			error: {
				character: error.column,
				code: 'W ' + error.rule,
				line: error.line,
				reason: error.message
			}
		}
	});
}

module.exports = tapJscs(function (file) {
	stylish.reporter(toJshint(file));
});

module.exports.combineWithHintResults = tapJscs(function (file) {
	file.jshint = file.jshint || {};
	file.jshint.success = false;
	file.jshint.results = (file.jshint.results || []).concat(toJshint(file));
	file.jshint.results.sort(byErrorLine);
});
