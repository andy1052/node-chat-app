const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app); //exactly the same as calling http.createServer((req,res) => {}); native to node
var io = socketIO(server); //pass in server to socketIO to communicate.

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected!');

socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));

socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Has Joined!'));

socket.on('createMessage', (message) => {
	console.log('Create Message: ', message);
	io.emit('newMessage', generateMessage(message.from, message.text));
	// socket.broadcast.emit('newMessage', {
	// 	from: message.from,
	// 	text: message.text,
	// 	createdAt: new Date().getTime()
	// });
});

socket.on('disconnect', () => {
	console.log('Disconnected from client!');
	});
});



server.listen(port, () => {
	console.log(`Server running on ${port}`);
});//same as app.listen

