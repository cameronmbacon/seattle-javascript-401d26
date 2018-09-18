'use strict';

const http = require('http');
const logger = require('./logger');
const requestParser = require('./request-parser');

const app = http.createServer((request, response) => {
  //! Vinicio - this function will listen for requests
  logger.log(logger.INFO, 'New Request!!');
  logger.log(logger.INFO, `METHOD: ${request.method}`);
  logger.log(logger.INFO, `ROUTE: ${request.url}`);

  return requestParser.parseAsync(request)
    .then((parsedRequest) => {
      if (parsedRequest.method === 'GET' && parsedRequest.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        //! Vinicio - this line here is setting up the response's body
        response.write(`<!DOCTYPE html>
          <head>THIS IS A HEAD</head>
          <body>Gregor is super cute</body>
          </html>
        `);
        logger.log(logger.INFO, 'Responding back with 200 status code and a HTML document');
        //! Vinicio - this line is actually sending back the response
        response.end();
        return undefined; //! Vinicio - I'm doing this to force the end of the function
      } else if (parsedRequest.method === 'POST' && parsedRequest.url === '/message') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        // response.write(JSON.stringify(request.body));
        response.write('this is just as string :/');
        // response.write(JSON.stringify({
        //   message: 'The response can be anything as long as we parse it as JSON',
        //   whoIsCute: 'Sir Gregor',
        // }));
        logger.log(logger.INFO, 'Responding back with 200 status code and a JSON document');
        response.end();
        return undefined;
      } else {
        logger.log(logger.INFO, 'Responding with a 404 Status code : NOT FOUND');
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Not Found');

        response.end();
        return undefined;
      }
      //! Vinicio - I'm doing this ONLY because I do'nt want the server to hang when it can't
      // find a route.
    })
    .catch(() => {
      logger.log(logger.INFO, 'Responding back with 400 status code');
      response.writeHead(400, { 'Content-Type': 'text/plain' });
      response.write('Bad Request');

      response.end();
      return undefined;
    });
});
//-------------------------------------------------
const server = module.exports = {};

/**
 *
 * @param port port where we want to start the server
 * @returns the result of app.listen
 */
server.start = (port) => {
  //! Vinicio - the next line will start the server and make it listen to request
  return app.listen(port, () => {
    logger.log(logger.INFO, `Server is on at PORT: ${port}`);
  });
};

// server.stop = (callback) => {
// };
