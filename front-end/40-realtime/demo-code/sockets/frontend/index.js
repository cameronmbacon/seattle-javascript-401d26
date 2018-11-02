'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static('./public'));

app.listen(process.env.PORT, () => {
  console.log('FRONTEND_SERVER_UP', process.env.PORT);
});
