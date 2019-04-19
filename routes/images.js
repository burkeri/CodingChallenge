// dependencies
const router = require("express").Router();

// import file
const imageController = require("../controllers");

// get all images - route
router.route("/").get(imageController.getImages);

module.exports = router;
