// dependencies
const router = require("express").Router();

// import file
const imagesController = require("../controllers/imagesController");

// get all images - route
router.route("/").get(imagesController.getImages);

module.exports = router;
