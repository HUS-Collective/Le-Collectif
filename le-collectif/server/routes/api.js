const express = require("express");
const Router = express.Router();
const collectiveController = require("../controllers/collectiveController");

// Post Request  ::: LOGIN/SIGN UP
Router.post("/signup", collectiveController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

Router.post("/login", collectiveController.loginUser, (req, res) => {
  return res.status(200).json("SEND ME TO GALLERY <- Obviously a placeholder");
});
module.exports = Router;
