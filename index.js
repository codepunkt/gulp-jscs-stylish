var map = require('map-stream');
var stylish = require(require('jshint-stylish'));

function toJshint (errors) {
	return errors.map(function (error) {
		return {
			file: error.filename,
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
			stylish.reporter(toJshint(file.jscs.errors));
		}
		cb(null, file);
	});
};
