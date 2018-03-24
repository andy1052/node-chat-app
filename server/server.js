const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app); //exactly the same as calling http.createServer((req,res) => {}); native to node
var io = socketIO(server); //pass in server to socketIO to communicate.

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected!');

socket.emit('postMessage', {
	from: "John",
	text: "See you then!",
	createAt: 123123
});

// socket.emit('newEmail', {
// 	from: "mike@example.com",
// 	text: "Hey, what's going on?",
// 	createAt: 123
// });	

// socket.on('createEmail', (newEmail) => {
// 	console.log('createEmail: ', newEmail);
// });

socket.on('newMessage', (message) => {
	console.log('New Message Posted: ', message);
});

socket.on('disconnect', () => {
	console.log('Disconnected from client!');
	});
});



server.listen(port, () => {
	console.log(`Server running on ${port}`);
});//same as app.listen

