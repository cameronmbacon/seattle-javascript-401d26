import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducer/main-reducer';

export default () => {
  const store = createStore(mainReducer, composeWithDevTools());
  return store;
};
