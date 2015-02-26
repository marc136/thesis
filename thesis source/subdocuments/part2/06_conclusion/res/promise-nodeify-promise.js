var DualModule = require('dual-module');

DualModule.readConfiguration('conf.json')
.then(function (data) {
	//do something with the configuration data
})
.fail(function (reason) {
	//initialize default values
})