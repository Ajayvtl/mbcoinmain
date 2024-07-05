"use strict";

var express = require('express');
var router = express.Router();
var transactionController = require('../controllers/transactionController');

// Handle GET requests
router.get('/pay', transactionController.makeTransaction);
module.exports = router;