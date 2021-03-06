import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import * as at from '../actions/work';

const defaults = {
  items: new List(),
};

export default handleActions({
  [at.FETCH_DATA_REQUEST]: state => state,
  [at.FETCH_DATA_COMPLETE]: state => state,
  [at.FETCH_DATA_SUCCESS]: (state, action) => ({
    ...state,
    items: state.items.merge(action.items),
  }),
}, defaults);

export const getWorkItems = state => state.items;
