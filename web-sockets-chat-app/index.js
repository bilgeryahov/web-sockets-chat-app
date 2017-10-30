'use strict';

const express = require('express');
const socket  = require('socket.io');

// App setup
const app = express();

const server = app.listen(4000, function () {

	console.log('Listening to requests on port number 4000....');
});

// Static files.
app.use(express.static('public'));

// Socket setup.

const io = socket(server);

io.on('connection', function (socketInstance) {

	console.log('Made socket connection.');
	console.log(socketInstance.id);
});