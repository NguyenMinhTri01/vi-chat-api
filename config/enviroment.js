const dotenv = require('dotenv');
dotenv.config(
  // {path:}
);
let PORT, SECRETKEY, CLIENT_HOST;
console.log('env ' + process.env.NODE_ENV);
switch (process.env.NODE_ENV){
  case "local":
    PORT = process.env.LOCAL_PORT
    SECRETKEY = process.env.LOCAL_SECRET
    CLIENT_HOST = process.env.LOCAL_CLIENT_HOST
    break;
  case "staging":
    PORT = process.env.STAGING_PORT
    SECRETKEY = process.env.STAGING_SECRET
    CLIENT_HOST = process.env.STAGING_CLIENT_HOST
    break;
}
module.exports = {
  PORT, SECRETKEY, CLIENT_HOST
}