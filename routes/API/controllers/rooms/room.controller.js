const { Room } = require("../../../../models/Room");
const { User } = require("../../../../models/User");
const { SECRETKEY } = require("../../../../config/enviroment");
const jwt = require("jsonwebtoken");
const createRoom = (req, res) => {
  const { userId, password } = req.body;
  const userType = "master";
  const newRoom = new Room({
    member: [{
      userId,
      userType,
    }],
    password: {
      value: password,
    }
  });
  newRoom.save()
    .then(room => {
      const token = jwt.sign({
        userId,
        userType,
        roomId : room._id
      }, SECRETKEY);
      res.status(200).json(token);
    })
    .catch(err => {
      res.status(500).json("Server Error");
      console.error(err);
    })
};


const getRooms = (req, res) => {
  Room.find()
    .populate({
      path: "member.userId"
    })
    .then(rooms => {
      res.status(200).json(rooms)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json("server error")
    })
}
module.exports = {
  createRoom,
  getRooms
}