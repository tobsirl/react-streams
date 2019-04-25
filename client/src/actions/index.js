import streams from '../apis/steams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

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

// Fetch all the steams
export const fetchStreams = () => async dispatch => {
  // get list of stream from the api server
  const response = await streams.get('/streams');

  // update the store with the list of streams
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
