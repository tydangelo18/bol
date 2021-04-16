// Bring in uuid
import { v4 as uuid } from 'uuid';
// Dispatch the actions which will call the case in the Reducer
import { SET_ALERT, REMOVE_ALERT } from './types';

// Alert action that will dispatch the type to the reducer, which then adds the alert to the state
export const setAlert = (msg, alertType) => (dispatch) => {
  // Generates a random id for each alert
  const id = uuid();
  // Call the alert reducer
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 4000);
};
