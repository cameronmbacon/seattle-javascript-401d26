'use strict';

const socketIO = require('socket.io-client');
const SOCKET_URL =  'http://localhost:3000';


const options = {
  transports : ['websocket'],
  'force new connection': true,
};

test('Basic socket message test', (done) => {
  const client = socketIO.connect(SOCKET_URL, options);

  client.on('connect', () => {
    client.emit('SEND_MESSAGE', 'Hello, this is the front-end');
  });

  client.on('RECEIVE_MESSAGE', data => {
    if (typeof data === 'string') {
      expect(data).toEqual('You have sent a message! Congratulations');
    }
    done(); //! Vinicio - this line is the one finishing the test
  });
});