function connectUserToRelayedConference(user, sdpOffer) {
	connectToMediaServer(user, sdpOffer)
	.then(recordConnection(user.webRtcEndpoint))
	.then(sendMessageTo(user, sdpAnswer))
	.fail(function (reason) {
		console.log("Error handling");
	});
}