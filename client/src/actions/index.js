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
export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
};
