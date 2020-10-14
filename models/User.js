const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  token: {type :String},
  socketIds : [],
  createdAt : {type : Date, default : Date.now},
  updatedAt : Date
})
const User = mongoose.model('User', UserSchema, 'User');
module.exports = {
    User,
    UserSchema
}