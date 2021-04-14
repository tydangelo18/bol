// Alert Reducer
// Bring in Action
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// Initial State
const initialState = [];

export default function (state = initialState, action) {
  // Destructure action
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      // Return the new alert state array with the payload
      return [...state, payload];
    case REMOVE_ALERT:
      // Filter the alert state array and return all alerts except for the one that matches the payload
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
