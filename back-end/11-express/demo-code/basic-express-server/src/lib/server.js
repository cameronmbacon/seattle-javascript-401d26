'use strict';

const express = require('express');
const logger = require('./logger');

const noteRoutes = require('../routes/note-router');

const app = express();

//-------------------------------------------------------------------------------------------------
// ROUTES
//-------------------------------------------------------------------------------------------------
app.use(noteRoutes);

app.all('*', (request, response) => {
  logger.log(logger.INFO, 'Returning a 404 from catch-all/default route (the route was not found');
  return response.sendStatus(404);
});
//-------------------------------------------------------------------------------------------------
const server = module.exports = {};
let internalServer = null;

server.start = () => {
  //! Vinicio - the next line will start the server and make it listen to request
  internalServer = app.listen(process.env.PORT, () => {
    logger.log(logger.INFO, `Server is on at PORT: ${process.env.PORT}`);
  });
};

server.stop = () => {
  internalServer.close(() => {
    logger.log(logger.INFO, 'The server is OFF.');
  });
};
