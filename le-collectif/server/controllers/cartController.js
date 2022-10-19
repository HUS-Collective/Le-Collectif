const db = require("../models/collectiveModels");

const cartController = {};

//add a new cart entry to cart table with user id and photo id
cartController.addEntry = async (req, res, next) => {
  try {
    //grab the user id and photo id from clients request body
    const { user_ID, photo_ID } = req.body;
    console.log("this is req.params", req.params);
    console.log("this is req.params.id", req.params.id);

    // insert into cart table  photo id and user id  grabbed from req body
    const queryString = `INSERT INTO cart (user_ID,photo_ID)
VALUES ($1,$2) RETURNING *`;
    //const photo = `SELECT * FROM photos WHERE photo_ID =${photo_ID}`;
    const result = await db.query(queryString, [user_ID, photo_ID]);
    console.log("this is at this point");
    console.log("this is at this point ---------->");
    console.log(result);
    res.locals.cart = result.rows[0];
    return next();
  } catch (err) {
    return next(err);
  }
};

cartController.retrieveUserPhoto = async (req, res, next) => {
  try {
    //grab the user id from clients request body
    const user_ID = req.params.id;
    console.log("this is req.params", req.params);
    console.log("this is req.params.id", req.params.id);

    // select from cart table where the user id from req.body and inner join the photo table with the photo id from cart table

    const queryString = `SELECT p.photoname, p.price
        FROM photos AS p
        INNER JOIN cart AS c
        ON p.photo_id = c.photo_id
        INNER JOIN users AS u
        ON u.user_id = c.user_id
        WHERE u.user_id = $1`;

    //const photo = `SELECT * FROM photos WHERE photo_ID =${photo_ID}`;
    const result = await db.query(queryString, [user_ID]);

    console.log(result);

    console.log("this is photoIDs ----->", result.rows[0]);
    res.locals.userPhotos = result.rows[0];
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = cartController;
