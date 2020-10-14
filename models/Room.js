const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const RoomSchema = new mongoose.Schema({
  member: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      userType: { type: String, enum: ['member', 'admin', 'master'] },
    }
  ],
  password: {
    value: { type: String, required: true },
    status: { type: Boolean, default: true }
  },
  numberOfMember: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
})
const Room = mongoose.model('Room', RoomSchema, 'Room');
module.exports = {
  Room,
  RoomSchema
}