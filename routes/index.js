// dependencies
const path = require("path");
const router = require("express").Router();

// import image api route file
const imagesRoute = require("./imagesAPI");

// get all images on api route ".../api/..."
router.use("/api", imagesRoute);

// send all other requests to react app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
