const express = require('express');
const app = express();
const ENV = require('./config/enviroment');
const initAllApi = require ('./routes/API')


const socketIO = require('socket.io');
const http = require('http'); //built-in nodejs
const initSockets = require('./sockets');

// connect mongodb
const connectMongoDB = require('./config/connectMongoDB');
connectMongoDB();
// create server
const server = http.createServer(app);
io = socketIO(server);
// init sockets 
initSockets(io);
// config Cross-Origin Resource Sharing
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", `${ENV.CLIENT_HOST}`);
  res.header(
  "Access-Control-Allow-Headers",
  "Authorization, X-Mashape-Authorization, Origin, X-Requested-With, Content-Type, Accept, token"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
  next();
});
// init all api
app.use(express.json());
initAllApi(app);

let port = process.env.PORT || ENV.PORT;
server.listen(port, () => {
  console.error(`Server is running on port ${port}`);
});

