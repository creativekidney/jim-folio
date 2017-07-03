import { handleActions } from 'redux-actions';
import * as at from '../actions/app';

const defaults = {
  curSlide: 0,
};

export default handleActions({
  [at.UPDATE_CURRENT_SLIDE]: (state, action) => ({
    ...state,
    curSlide: action.nextSlide,
  }),
}, defaults);

export const getCurrentSlide = state => state.curSlide;
