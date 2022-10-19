const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController");

//Store user and selected photo into cart
cartRouter.post("/checkout", cartController.addEntry, (req, res) => {
  return res.status(200).json(res.locals.cart);
});

// GET Request  ::: Grab cart Items
cartRouter.get(
  "/checkout/:id",
  cartController.retrieveUserPhoto,
  (req, res) => {
    return res.status(200).json(res.locals.userPhotos);
  }
);

//SELECT *
//FROM cart
//WHERE user_ID = 1;

module.exports = cartRouter;
