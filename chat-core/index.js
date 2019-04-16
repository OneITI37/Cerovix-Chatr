// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('./resources/')(server);
var port = process.env.PORT || 3000;
var all_user = new Array();

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// Chatroom

var numUsers = 0;

io.on('connection', (socket) => {
  var addedUser = false;
  socket.broadcast.emit('user list', {
    userlist: all_user
  });

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (username) => {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    all_user.push(username);
    var all_user_string = "";
    for (i = 0; i < all_user.length; i++)
      all_user_string += all_user[i]+", "
    socket.broadcast.emit('user list', {
      userlist: all_user_string
    });
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;
      var i;
      for (i = 0; i < all_user.length; i++)
        if (all_user[i] == socket.username) {
          all_user.splice(i, 1);
          break;
        }
      var all_user_string = "";
      for (i = 0; i < all_user.length; i++)
        all_user_string += all_user[i]+", "
      socket.broadcast.emit('user list', {
        userlist: all_user_string
      });
      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
