const authController =require("../controllers/authController");

const express = require('express');
const authValidator = require('../validators/authValidator');

const router = express.Router();


router.post('/register',authValidator.register, authController.register);
router.post('/login',authValidator.login, authController.login);



module.exports = router;
