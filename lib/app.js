const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.static(`${__dirname}/../public`));
app.use(express.json());
app.use(cors());
app.use('/api/v1/orders', require('./controllers/orders.js'));
app.use('/api/v1/items', require('./controllers/items.js'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


module.exports = app;

