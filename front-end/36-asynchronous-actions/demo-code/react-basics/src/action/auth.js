import superagent from 'superagent';
import * as routes from '../routes';

//-------------------------------------------------------------
// SYNC
//-------------------------------------------------------------
export const set = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const remove = () => ({
  type: 'TOKEN_REMOVE',
});

//-------------------------------------------------------------
// ASYNC
//-------------------------------------------------------------
//! Vinicio, because actions are curried, store is going to be the last argument
//! to be applied.
//! user is applied by the developer when calling the action
//! store is applied by thunk
export const signupRequest = user => (store) => {
  //! 2
  return superagent.post(`${API_URL}${routes.SIGNUP_BACKEND}`) // eslint-disable-line
    .send(user)
    .withCredentials() //! Vinicio - get cookies
    .then((response) => { //! 3
      //! Vinicio - set is a SYNC action, therefore; it connects and updates the store
      return store.dispatch(set(response.text)); // !4
    });
};

// export const loginRequest = user => store => { };
