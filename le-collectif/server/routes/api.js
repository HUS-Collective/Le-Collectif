const express = require("express");
const Router = express.Router();
const collectiveController = require("../controllers/collectiveController");

//Get Request

// Post Request  ::: LOGIN/SIGN UP
Router.post("/", collectiveController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

// Delete Request

// Put Request

module.exports = Router;
