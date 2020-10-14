const { User } = require("../../models/User");
const jwt = require('jsonwebtoken');
const { SECRETKEY } = require("../../config/enviroment");


const userSocket = (socket) => {
  socket.emit('user_connected', socket.id);
  socket.on('Authentication', (token)=>{
    jwt.verify(token, SECRETKEY, (err, decoded) => {
      if (!err) {
        socket.auth = true;
        socket.emit('auth_successful', {auth : true});
      }
    });
  })



  socket.on('disconnect', (reason) => {
    User.findOne ( {
      socketIds : {$all : [socket.id]}
    })
    .then(user => {
      if(user && user._id){
        user.socketIds = user.socketIds.filter(socketId => socketId != socket.id);
        return user.save()
      }
    })
    .catch(error => {
      console.log(error)
    })
  });
}

module.exports = userSocket;