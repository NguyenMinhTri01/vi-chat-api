const userSocket = require('./users')


let initSockets = (io) => {
  console.log("Socket is running")
  io.on("connection", async  (socket) => {
    socket.auth = false;
    userSocket(socket);
  })
};

module.exports = initSockets