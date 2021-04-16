import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User
export const register = (name, email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users', name, email, password);
    // If registration successful
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // If registration fails
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
