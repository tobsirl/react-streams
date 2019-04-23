import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

// setup a dummy reducer to get the app running
export default combineReducers({
  auth: authReducer,
  form: formReducer
});
