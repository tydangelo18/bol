// Application Root Reducer: Combines all Reducers created
import { combineReducers } from 'redux';
// Bring in Reducers
import alert from './alert';

export default combineReducers({
  alert,
});
