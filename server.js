// dependencies
const express = require("express");
const mongoose = require("mongoose");

// server port
const PORT = process.env.PORT || 3001;

// mongodb setup
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/codingChallenge";

// start express app
const app = express();

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





// // start server
// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
//   console.log(`localhost://${PORT}`);
// });

// const path = require("path");

// const PORT = process.env.PORT || 3001;

// // start espress app
// const app = express();

// // Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
