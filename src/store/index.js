/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from 'src/middlewares/auth';
import websocket from 'src/middlewares/websocket';

import reducer from 'src/reducers';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(auth, websocket),
));

export default store;
