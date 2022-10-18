const db = require("../models/collectiveModels");

const collectiveController = {};

collectiveController.createUser = async (req, res, next) => {
  try {
    const { userName, password, email } = req.body;
    const newUser =
      "INSERT INTO users (userName, password, email) VALUES ($1, $2, $3) RETURNING *";

    const result = await db.query(newUser, [userName, password, email]);
    res.locals.user = result.rows[0];
    console.log("this is res.locals", res.locals.user);
    return next();
  } catch (err) {
    return next(err);
  }
};
module.exports = collectiveController;
