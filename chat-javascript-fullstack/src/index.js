const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

require('./sockets.js')(io);

app.set('port', process.env.PORT || 3001)

// Static files
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), () => {
  console.log("Express server on port " + app.get('port'));
});
