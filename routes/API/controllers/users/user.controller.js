const { User, UserSchema } = require('../../../../models/User');
const userSocket = require('../../../../sockets/users');

const createUser = (req, res) => {
  const { name, socketId } = req.body
  const newUser = new User({name, socketIds : [socketId]});
  newUser.save()
  .then(user => {
    res.status(200).json(user)
  })
  .catch (err => {
    console.log(err)
    res.status(500).json('server is error');
  })
};

const addSocketIdForUser = (req, res) => {
  const {userId, socketId} = req.body;
  User.findById(userId)
  .then(user => {
    if (user && !user.socketIds.includes(socketId)) {
      user.socketIds.push(socketId);
      return user.save();
    } else if (!user){
      res.status(200).json(false)
    }
  })
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    console.error(err);
    res.status(500).json("serve error");
  })
}

module.exports = {
  createUser,
  addSocketIdForUser
}