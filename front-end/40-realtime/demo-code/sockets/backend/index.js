'use strict';

// ----------------------------------------------------------------------
// BACKEND
// ----------------------------------------------------------------------
const uuid = require('uuid/v4');
const express = require('express');
const app = express(); //! Vinicio - express server - Web Request-Response Cycle
require('dotenv').config();
// ----------------------------------------------------------------------
// SOCKET.IO
// ----------------------------------------------------------------------
//! Vinicio - taking an express serving and making it into a NODE SERVER
const httpServer = require('http').Server(app);
const realTimeServer = require('socket.io')(httpServer);
// ----------------------------------------------------------------------
// const clientFilter = new Map();

realTimeServer.on('connection', socket => {
  //! Vinicio - here, socket represents the communication channel
  console.log('__CONNECTION__', socket.id);

  socket.on('SEND_MESSAGE', data => {
    socket.emit('RECEIVE_MESSAGE', 'You have sent a message! Congratulations'); //1

    realTimeServer.emit('RECEIVE_MESSAGE', { //2
      ...data,
      id: uuid(),
      timestamp: new Date(),
    })
  });
});


httpServer.listen(process.env.PORT, () => {
  console.log('__BACKEND_SERVER_UP', process.env.PORT);
});


