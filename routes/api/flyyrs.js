const express = require('express');
const router = express.Router();
const flyyrsCtrl = require('../../controllers/api/flyyrs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


module.exports = router;