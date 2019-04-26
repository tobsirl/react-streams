import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return;
    case FETCH_STREAMS:
      return;
    case FETCH_STREAM:
      return;
    case DELETE_STREAM:
      return;
    case EDIT_STREAM:
      return;
    default:
      return state;
  }
};
