
const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

const user = require("../models/user");

router.route("/signup")
.get(userController.renderSignUpForm)
.post(wrapAsync(userController.signup)
);

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: '/login',
        failureFlash: true
    }),
    userController.login
);

// LOGOUT
router.get("/logout", userController.logout);

module.exports = router;