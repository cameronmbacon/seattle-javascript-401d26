'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

require('dotenv').config();

const CLIENT_URL = 'http://localhost:8080';
const GOOGLE_BACKEND = 'https://www.googleapis.com/oauth2/v4/token';
const API_URL = 'http://localhost:3000/oauth/google';
const OPEN_ID_URL = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';

app.get('/oauth/google', (request, response) => {
  //! Vinicio - Here, we are at step 3
  console.log('_STEP 3_ Receiving Code');
  if (!request.query.code) {
    //! Vinicio - if something goes wrong, we go back to our backend.
    response.redirect(CLIENT_URL);
  } else {
    console.log('_STEP 3.1_ Sending the code back');
    return superagent.post(GOOGLE_BACKEND)
      .type('form')
      .send({
        code: request.query.code,
        grant_type: 'authorization_code',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: API_URL
      })
      .then(tokenResponse => {
        console.log('_STEP 3.2_ Token');

        if(!tokenResponse.body.access_token) {
          response.redirect(CLIENT_URL);
        }
        //! Vinicio - remember to not save the token
        const googleToken = tokenResponse.body.access_token;

        console.log('_STEP 4_ Connecting to OpenID');

        return superagent.get(OPEN_ID_URL)
          .set('Authorization', `Bearer ${googleToken}`);
      })
      .then(openIdResponse => {
        console.log('_STEP 4_ Getting user Data');
        console.log(openIdResponse.body);

        console.log('_STEP 5_ Creating your own ACCOUNT');
        console.log('Creating our token, account, and everything in our system')
        //! Vinicio - HERE we are back on the realm of WEEK 4

        // return Account.create(VALUES FROM OPEN ID) // 1 - Hash Password
        //   .then((createdAccount) => {
        //     logger.log(logger.INFO, 'AUTH - creating TOKEN');
        //     return createdAccount.pCreateToken(); // 2 - create and save token
        //   })
        //   .then((token) => {
        //     // Vinicio - over here, we don't need to save since the account it's saved in pCreateToken
        //     logger.log(logger.INFO, 'Responding with 200 status code and a token');
        //     return response.json({ token }); // 3 - return a token
        //   })
        //   .catch(next);

        response.cookie('401d26-OAUTH-TOKEN','Our Token: Gregor is Cute');
        response.redirect(CLIENT_URL);
      })
      .catch(error => {
        console.error(error);
        response.redirect(CLIENT_URL);
      });
  }
});

app.listen(process.env.PORT, () => {
  console.log('_SERVER_UP_', process.env.PORT);
});