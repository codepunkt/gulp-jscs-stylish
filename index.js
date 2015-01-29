var map = require('map-stream');
var stylish = require(require('jshint-stylish'));

function toJshint (errors) {
	return file.jscs.errors.map(function (error) {
		return {
			file: file.base + error.filename,
			error: {
				character: error.column,
				code: error.rule,
				line: error.line,
				reason: error.message
			}
		}
	});
}

module.exports = function () {
	return map(function (file, cb) {
		if (file.jscs && file.jscs.errorCount) {
			stylish.reporter(toJshint(file));
		}
		cb(null, file);
	});
};
