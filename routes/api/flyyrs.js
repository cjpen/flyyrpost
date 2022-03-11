const express = require('express');
const router = express.Router();
const flyyrsCtrl = require('../../controllers/api/flyyrs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST to /api/flyyrs
router.post('/', flyyrsCtrl.post);
// Get to /api/flyyrs
router.get('/', flyyrsCtrl.getAll);

module.exports = router;