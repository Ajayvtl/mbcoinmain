const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use('/transaction', transactionRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
