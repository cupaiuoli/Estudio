module.exports = function (io) {

  var nicknames = [];

  io.on('connection', socket => {
    socket.on('send message', data => {
      console.log(data);
      io.sockets.emit('new message', {
        msg: data,
        nick: socket.nickname
      });
    });

    socket.on('new user', (newUser, callback) => {
      console.log(nicknames);
      if (nicknames.indexOf(newUser) != -1) {
        callback(false);
        console.log('New user already logged: ' + newUser)
      } else {
        callback(true);
        socket.nickname = newUser;
        nicknames.push(newUser);
        console.log('Added new user: ' + newUser);
        io.sockets.emit('usernames', nicknames);
      }
    });

    socket.on('disconnect', data => {
      if (!socket.nickname) return;
      nicknames.splice(nicknames.indexOf(socket.nickname), 1);
      io.sockets.emit('usernames', nicknames);
    });

    console.log('Chat module connected');
  });
}
111
