"use strict";

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var transactionRoutes = require('./routes/transactionRoutes');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express["static"](path.join(__dirname, 'views')));
app.use('/transaction', transactionRoutes);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});