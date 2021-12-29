const io = require('socket.io')()
const socketApi = {
  io
}

// Add your socket.io logic here!
io.on('message', function (socket) {
  console.log('A user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', new Date().getTime());
  });
})

// End of socket.io logic

module.exports = socketApi