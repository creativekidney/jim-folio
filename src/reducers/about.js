import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as at from '../actions/about';

const defaults = {
  info: new Map(),
};

export default handleActions({
  [at.FETCH_DATA_REQUEST]: state => state,
  [at.FETCH_DATA_COMPLETE]: state => state,
  [at.FETCH_DATA_SUCCESS]: (state, action) => ({
    ...state,
    info: action.info,
  }),
}, defaults);

export const getAboutInfo = state => state.info;
