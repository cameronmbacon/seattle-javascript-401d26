'use strict';
const { createStore } = require('redux');

const DEFAULT_STATE = 0;

const simpleReducer = (state = DEFAULT_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'INCREMENT_COUNTER':
      return state + payload;
    case 'DECREMENT_COUNTER':
      return state - payload;
    case 'RESET_COUNTER':
      return DEFAULT_STATE;
    default: //! Vinicio - this happens if I can't respond to the type
      return state;
  }
};


//----------------------------------------------------------------------
// let state = simpleReducer(undefined, {type: undefined});
// console.log({state});
//
// state = simpleReducer(state, {type: 'INCREMENT_COUNTER', payload: 5});
// console.log({state});
// state = simpleReducer(state, {type: 'INCREMENT_COUNTER', payload: 5});
// console.log({state});
// state = simpleReducer(state, {type: 'DECREMENT_COUNTER', payload: 2});
//
// console.log({state});
//----------------------------------------------------------------------

const myStore = createStore(simpleReducer);
console.log(myStore.getState());


myStore.dispatch({type: 'INCREMENT_COUNTER', payload: 2});
console.log(myStore.getState());

myStore.dispatch({type: 'INCREMENT_COUNTER', payload: 28});
console.log(myStore.getState());

myStore.dispatch({type: 'DECREMENT_COUNTER', payload: 2});
console.log(myStore.getState());



