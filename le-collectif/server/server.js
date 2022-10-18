const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
const apiRouter = require("./routes/api.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).send("THIS IS OUR BACKEND !!!!!!!!!!!!!");
});
//route to api router
app.use("/user", apiRouter);
// SIGNUP/ LOGIN

// app.use(express.static(path.resolve(__dirname, "../client")));

if (process.env.NODE_ENV === "production") {
  app.use("/build", express.static(path.resolve(__dirname, "../build")));
  app.get("/", (req, res) =>
    //res.status(200).sendFile(path.join(__dirname, "../build/index.html"))
    res.status(200).send("YO THIS IS OUR SERVER")
  );
}

/**
 * define route handlers
 */
//app.use("/api", apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send("This page does not exist"));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred!!!!!!!!!" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
