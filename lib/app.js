const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.static(`public`));
app.use(express.json());
app.use(cors());
app.use('/api/v1/orders', require('./controllers/orders.js'));
app.use('/api/v1/items', require('./controllers/items.js'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localHost:5500");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   })

module.exports = app;

