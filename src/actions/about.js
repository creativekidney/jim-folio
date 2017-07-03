import { fromJS } from 'immutable';
import { fetchAbout } from '../api/index';

export const FETCH_DATA_REQUEST = 'about/FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'about/FETCH_DATA_SUCCESS';
export const FETCH_DATA_COMPLETE = 'about/FETCH_DATA_COMPLETE';

export const fetchAboutData = () =>
  (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    fetchAbout().then((res) => {
      const info = fromJS(res);
      dispatch({ type: FETCH_DATA_SUCCESS, info });
      dispatch({ type: FETCH_DATA_COMPLETE });
    });
  };
