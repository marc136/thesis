function connectToMediaServer(sendingUser, sdpOffer) {
	var deferred = Q.defer();
	var roomId = sendingUser.roomId;
	var sourceEndpoint = sendingUser.webRtcEndpoint;
  
  try {
	getPipeline(roomId, function (error, pipeline) {
		if (error) { throw error; }
		
		pipeline.create('WebRtcEndpoint', function (error, endpoint) {
			if (error) { throw error; }
        
			endpoint.processOffer(sdpOffer, function (error, sdpAnswer) {
				if (error) { throw error; }
          
				sourceEndpoint.connect(endpoint, function (error) {
					if (error) { throw error; }
            
					var response = { 
						success: true, message: 'Everything is fine',
						sdpAnswer: sdpAnswer
					}
					
					deferred.resolve(response);
			});
		});
	});

	} catch (err) {
		deferred.reject(err);
	}

	return deferred.promise;
});