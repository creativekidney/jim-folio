import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

export default handleActions({
  ADD_WORK_ITEMS: (state, action) => ({
    ...state,
    items: state.items.merge(action.items),
  }),
  ADD_ABOUT_INFO: (state, action) => ({
    ...state,
    about: action.aboutInfo,
  }),
  UPDATE_CURRENT_SLIDE: (state, action) => ({
    ...state,
    curSlide: action.nextSlide,
  }),
},
  {
    items: new List(),
    about: new Map(),
    curSlide: 0,
  });
