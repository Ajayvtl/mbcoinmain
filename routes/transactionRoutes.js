const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Handle GET requests
router.get('/pay', transactionController.makeTransaction);

module.exports = router;
