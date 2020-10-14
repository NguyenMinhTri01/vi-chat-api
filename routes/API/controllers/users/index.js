const express = require('express');
const userController = require ('./user.controller');
const router = express.Router();
router.get("/", (req , res) => {
    res.status(200).json("api user ok")
  }
);
router.post ("/", userController.createUser);
router.patch("/", userController.addSocketIdForUser)

module.exports = router