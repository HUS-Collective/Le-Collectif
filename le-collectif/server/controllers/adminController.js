const db = require("../models/collectiveModels");

const adminController = {};

adminController.postPhotos = async (req, res, next) => {
  try {
    const { photo_ID, photoName, artistName, price, path, tags, views, count } =
      req.body;
    const newPhoto = `INSERT INTO photos (photo_ID, photoName, artistName, price, path, tags, views, count ) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
    `;

    const data = await db.query(newPhoto, [
      photo_ID,
      photoName,
      artistName,
      price,
      path,
      tags,
      views,
      count,
    ]);
    console.log("just checking if it makes it here");
    res.locals.photos = data.rows[0];
    console.log("this is res.locals", res.locals.photos);
    return next();
  } catch (err) {
    return next(err);
  }
};

adminController.getPhotos = async (req, res, next) => {
  try {
    const grabPhotos = `SELECT * FROM photos`;
    console.log("this is at this point");
    const data = await db.query(grabPhotos);
    console.log(data);
    res.locals.allphotos = data.rows;
    return next();
  } catch (err) {
    return next(err);
  }
};

adminController.getAPic = async (req, res, next) => {
  try {
    const { photo_ID } = req.params;
    //const photo = `SELECT * FROM photos WHERE photo_ID =${photo_ID}`;
    console.log("this is at this point");

    const data = await db.query(`SELECT * FROM photos WHERE photo_ID =$1`, [
      photo_ID,
    ]);
    console.log("this is at this point ---------->");
    console.log(data);
    res.locals.pic = data.rows[0];
    return next();
  } catch (err) {
    return next(err);
  }
};
module.exports = adminController;
