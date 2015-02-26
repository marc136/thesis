function connectToMediaServer(sendingUser, sdpOffer, callback) {
	var roomId = sendingUser.roomId;
	var sourceEndpoint = sendingUser.webRtcEndpoint;
  
  try {
	getPipeline(roomId, function (error, pipeline) {
		if (error) { return callback(error); }
		
		pipeline.create('WebRtcEndpoint', function (error, endpoint) {
			if (error) { return callback(error); }
        
			endpoint.processOffer(sdpOffer, function (error, sdpAnswer) {
				if (error) { return callback(error); }
          
				sourceEndpoint.connect(endpoint, function (error) {
					if (error) { return callback(error); }
            
					var response = { 
						success: true, message: 'Everything is fine',
						sdpAnswer: sdpAnswer
					}
					
					return callback(null, error);
			});
		});
	});
	
	} catch (err) {
		return callback(err);
	}
});