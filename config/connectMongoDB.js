const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

/**
 * 
 * connect mongoDB
 */

 let connectMongoDB = () => {
  let URI = ''
   if(process.env.NODE_ENV === "staging") {
    URI = `${process.env.DB_CONNECTION_SRV}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CONNECTION_CLOUD}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
   } else if (process.env.NODE_ENV === "local") {
    URI = `${process.env.DB_CONECTION_LOCAL}`;
   }
  mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false})
  .then(() => {
    console.log("Mongodb is connected");
  });
  // const db = mongoose.connection;
  // return db;
 }

 module.exports = connectMongoDB;
