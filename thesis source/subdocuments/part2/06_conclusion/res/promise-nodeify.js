//dual-module.js
var Q = require('q'), fs = require('fs');

module.exports = {
	readConfiguration: function (file, callback) {
		var deferred = Q.defer();

		fs.readFile(function (error, data) {
			if (error) deferred.reject(error);
			else deferred.resolve(data);
		});

		deferred.promise.nodeify(callback);
		return deferred.promise;
	}
}