// Root Reducer that combines all reducers
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import game from './game';

export default combineReducers({
  alert,
  auth,
  profile,
  game,
});
