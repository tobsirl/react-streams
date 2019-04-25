import streams from '../apis/steams';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//Using react-thunk
// Create a stream 
export const createStream = formValues => async dispatch => {
  // send data to the backend server
  const response = await streams.post('/streams', formValues);

  // update the store
  dispatch({ type: CREATE_STREAM, payload: response.data });
};
