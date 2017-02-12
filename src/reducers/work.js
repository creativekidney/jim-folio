import { handleActions } from 'redux-actions';
import { List } from 'immutable';

export default handleActions({
  WORK_ADD_ITEMS: (state, action) => {
    console.log('reducer: WORK_ADD_ITEMS', action)
    return {
      ...state,
      items: state.items.merge(action.items),
    };
  },
},
  {
    items: new List(),
  });
