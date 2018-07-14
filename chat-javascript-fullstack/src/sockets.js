module.exports = function (io) {
  io.on('connection', socket => {
    socket.on('send message', message => {
      console.log(message);
      io.sockets.emit('new message', message);
    })
    console.log('New user connected');
  });
}
