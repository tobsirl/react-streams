import streams from '../apis/steams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
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
export const createStream = formValues => async (dispatch, getState) => {
  // get the userId using getState()
  const { userId } = getState().auth;
  // send data to the backend server
  const response = await streams.post('/streams', { ...formValues, userId });

  // update the store
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/');
};

// Fetch all the steams
export const fetchStreams = () => async dispatch => {
  // get list of stream from the api server
  const response = await streams.get('/streams');

  // update the store with the list of streams
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

// Fetch a single stream
export const fetchStream = id => async dispatch => {
  // make a get request with the id
  const response = await streams.get(`/streams/${id}`);

  // update the store
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

// Update an existing stream
export const editStream = (id, formValues) => async dispatch => {
  // make an update to an existing stream
  const response = await streams.patch(`/streams/${id}`, formValues);

  // update the store
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

// delete an existing stream
export const deleteStream = id => async dispatch => {
  // remove a stream
  await streams.delete(`/streams/${id}`);

  //update the store
  dispatch({ type: DELETE_STREAM, payload: id });
};
