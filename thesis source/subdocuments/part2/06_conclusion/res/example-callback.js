function connectUserToRelayedConference(user, sdpOffer) {
	
	return connectToMediaServer(user, sdpOffer, funtion (error, sdpAnswer) {
		if (error) { console.log("Error handling"); return; }

		return recordConnection(user.webRtcEndpoint, function (error) {
			if (!error) {
				sendMessageTo(user, sdpAnswer);
			}
			return;
		})
	});
}