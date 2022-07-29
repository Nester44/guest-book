import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware }
  from 'redux';
import appReducer from './app-reducer.js';
import ThunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
  app: appReducer
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
