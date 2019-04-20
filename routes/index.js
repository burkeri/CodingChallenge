// dependencies
const path = require("path");
const router = require("express").Router();
const imagesRoute = require("./images");

// get all images - route
router.use("/", imagesRoute);

// send all other requests to react app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
