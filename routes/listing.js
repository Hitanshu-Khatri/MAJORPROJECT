const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");
const multer  = require('multer');
const {storage,cloudinary} = require("../cloudConfig.js");
const upload = multer({ storage });
const listingController = require("../controllers/listings.js");


//Index Route

router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    // validateListing,
    upload.single('listing[image]'),
    wrapAsync(listingController.createListing)
);

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//book route
router.route("/:id/booknow")
.get(isLoggedIn, wrapAsync(listingController.renderBookNowForm));


//edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));




module.exports = router;