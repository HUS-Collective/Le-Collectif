const db = require("../models/collectiveModels");
const bcrypt = require("bcryptjs");
const collectiveController = {};
collectiveController.createUser = async (req, res, next) => {
  try {
    const { userName, password, email } = req.body;

    const userDB = await db.query(`SELECT * FROM users`);

    for (let i = 0; i < userDB.rows.length; i++) {
      if (userDB.rows[i].email === req.body.email) {
        return res.status(401).json("Email already exist!");
      }
    }
    for (let i = 0; i < userDB.rows.length; i++) {
      if (userDB.rows[i].username === req.body.userName) {
        return res.status(401).json("Username already exist!");
      }
    }
    const salt = await bcrypt.genSalt(10);
    const passwordH = await bcrypt.hash(password, salt);
    console.log("THIS IS THE HASHED PASSWORD ---------------->", passwordH);
    console.log(typeof passwordH);

    //INSERT NEW USER INTO DB & attach cookies to sign up
    const newUser =
      "INSERT INTO users (userName, password, email) VALUES ($1, $2, $3) RETURNING *";
    const result = await db.query(newUser, [userName, passwordH, email]);
    res.cookie("token", "user", { httpOnly: true, secure: true });
    res.locals.user = result.rows[0];
    //console.log("this is result", result);
    console.log("this is res.locals", res.locals.user);
    return next();
  } catch (err) {
    return next(err);
  }
};

collectiveController.loginUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const userDB = await db.query(`SELECT * FROM users WHERE username =$1 `, [
      userName,
    ]);

    const validPassword = await bcrypt.compare(
      password,
      userDB.rows[0].password
    );
    console.log("this is valid password", validPassword);
    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    res.cookie("token", "user", { httpOnly: true, secure: true });
    return next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = collectiveController;
