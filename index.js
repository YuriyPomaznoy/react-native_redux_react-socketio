/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';

import rootReducer from './core/reducers';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import io from 'socket.io-client'
import createSocketIoMiddleware from 'redux-socket.io'

const socket = io('http://192.168.1.100:5000', {transports: ['websocket'], jsonp: false })
//socket.connect();
const socketIoMiddleware = createSocketIoMiddleware(socket, 'WS_TO_SERVER_');

const createStoreWithMiddlewares = applyMiddleware(ReduxThunk, socketIoMiddleware)(createStore)
const store = createStoreWithMiddlewares(rootReducer)

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
