import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // remame to formReducer
import authReducer from './authReducer';
import streamReducer from './streamReducer';

// setup a dummy reducer to get the app running
export default combineReducers({
  auth: authReducer,
  form: formReducer, // must be named form for the redux-form package
  streams: streamReducer
});
