import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import 'isomorphic-fetch';
import configureStore from './store/configStore';
import { AUTH_USER } from './reducers/authReducer';

import rootReducer from './reducers/index';
import routes from './routes';
import getRoutes from './routes';



const store = configureStore(window.INITIAL_STATE);

const token = localStorage.getItem('token');

if(token){
  store.dispatch({type:'AUTH_USER'})
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)} />
  </Provider>
  , document.getElementById('app'));
