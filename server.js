// dependencies
const express = require("express");
const mongoose = require("mongoose");

// import files
const routes = require("./routes");

// mongodb setup
const MONGODB_URI = "mongodb://localhost/codingChallenge";

// server port
const PORT = process.env.PORT || 3001;

// start express app
const app = express();

// middleware ------------------

// serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -----------------------------

// routes
// app.use(routes);

// db connection
mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => {
    console.log("db connected...");
  })
  .catch(err => console.log(err));

// start server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
