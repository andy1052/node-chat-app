var socket = io();

	socket.on('connect', function() {
		console.log('Connected to Server!');

		socket.emit('newMessage', {
			from: 'Andy5467',
			text: 'Check this out!'
		});
	});

	socket.on('disconnect', function() {
		console.log('Disconnected from server');	
	});

//creating custom events
	// socket.on('newEmail', function(email) {
	// 	console.log('New Email', email);
	// });

	socket.on('postMessage', function(mess) {
		console.log('New Message index: ', mess);
	});