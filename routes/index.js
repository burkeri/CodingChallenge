// dependencies
const path = require("path");
const router = require("express").Router();

// import files
const imageRoutes = require("./images");

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// get all images - route
router.use("/", imageRoutes);
