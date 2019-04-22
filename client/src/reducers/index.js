import { combineReducers } from 'redux';
import authReducer from './authReducer';

// setup a dummy reducer to get the app running
export default combineReducers({
  auth: authReducer
});
