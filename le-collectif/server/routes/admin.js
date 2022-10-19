const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

// Post Request  : Posting pics for admin
adminRouter.post("/", adminController.postPhotos, (req, res) => {
  return res.status(200).json(res.locals.photos);
});

module.exports = adminRouter;
