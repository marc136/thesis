var DualModule = require('dual-module');

DualModule.readConfiguration('conf.json', function (error, data) {
	if (error) {
		//initialize default values
	}
	else {
		//do something with the configuration data
	}
});