import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

export default handleActions({
  ADD_WORK_ITEMS: (state, action) => {
    console.log('reducer: WORK_ADD_ITEMS', action);
    return {
      ...state,
      items: state.items.merge(action.items),
    };
  },
  ADD_ABOUT_INFO: (state, action) => ({
    ...state,
    about: action.aboutInfo,
  }),
},
  {
    items: new List(),
    about: new Map(),
  });
