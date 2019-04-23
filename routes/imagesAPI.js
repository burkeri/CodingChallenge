// dependencies
const router = require("express").Router();

// import images controller
const imagesController = require("../controllers/imagesController");

// get all images on route ".../images"
router.route("/images").get(imagesController.getImages);

module.exports = router;
