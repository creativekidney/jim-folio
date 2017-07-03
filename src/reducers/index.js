import { combineReducers } from 'redux';
import work from './work';
import about from './about';
import app from './app';

export default combineReducers({
  work,
  about,
  app,
});
