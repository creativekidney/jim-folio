import { fromJS } from 'immutable';
import { fetchWork } from '../api/index';

export const FETCH_DATA_REQUEST = 'work/FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'work/FETCH_DATA_SUCCESS';
export const FETCH_DATA_COMPLETE = 'work/FETCH_DATA_COMPLETE';

export const fetchWorkData = () =>
  (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    fetchWork().then((res) => {
      const items = fromJS(res);
      dispatch({ type: FETCH_DATA_SUCCESS, items });
      dispatch({ type: FETCH_DATA_COMPLETE });
    });
  };
