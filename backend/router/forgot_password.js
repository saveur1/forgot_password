const express = require("express");
const { forgot_password,create_new_user,reset_password,verify_token } = require("../controller/forgot_password");

const router = express.Router();

router.post("/forgot_password",forgot_password);

router.post("/create",create_new_user);

router.post("/reset_password",reset_password);

router.post("/verify_token",verify_token);

module.exports = router;