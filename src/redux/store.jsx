import { createStore,configureStore ,applyMiddleware,compose } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers=(previousState, action) => previousState
export const store = createStore(reducers,{},composeEnhancers(applyMiddleware(thunk)) );