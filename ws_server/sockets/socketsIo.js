var socketIO = require('socket.io');
var readline = require('readline');
var rl = readline.createInterface({input: process.stdin});

module.exports = function(server) {
  
  var io = socketIO(server);
  
  io.on('connection', function(socket) {
    console.log(`User with id ${socket.id} connected`);

    socket.on('action', function(action) {
      switch(action.type) {
        case 'WS_TO_SERVER_SEND_MESSAGE':
          console.log(action.payload);
          var data = {
            type: 'WS_TO_CLIENT_MESSAGE',
            payload: {himself: true, msg: action.payload}
          };
          socket.emit('action', data);
          break;
          
        default:
          console.log('NoType!!!');
      }
    });
    
    rl.on('line', function(line) {
      socket.emit('action', {
        type: 'WS_TO_CLIENT_MESSAGE',
        payload: { himself: false, msg: line }
      });
    });
    
    socket.on('disconnect', function() {
      console.log(`User with id ${socket.id} disconnected`);
    });
    
  });
  
};