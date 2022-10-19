const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

// Post Request  : Posting pics for admin
adminRouter.post("/", adminController.postPhotos, (req, res) => {
  return res.status(200).json(res.locals.photos);
});

//GET req for photos
adminRouter.get("/", adminController.getPhotos, (req, res) => {
  return res.status(200).json(res.locals.allphotos);
});
//GET A SPECIFIC PHOTO
adminRouter.get("/:id", adminController.getAPic, (req, res) => {
  return res.status(200).json(res.locals.pic);
});
module.exports = adminRouter;
