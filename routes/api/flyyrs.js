const express = require('express');
const router = express.Router();
const flyyrsCtrl = require('../../controllers/api/flyyrs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST to /api/flyyrs
router.post('/', ensureLoggedIn, flyyrsCtrl.post);
// Get to /api/flyyrs
router.get('/', flyyrsCtrl.getAll);
// get to /api/flyyrs/:id
router.get('/:id', flyyrsCtrl.getOne);
// POST to /api/flyyrs/:id
router.post('/:id', ensureLoggedIn, flyyrsCtrl.update);
// DELETE to /api/fllyrs/:id
router.delete('/:id', ensureLoggedIn, flyyrsCtrl.delete);

module.exports = router;