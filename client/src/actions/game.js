import axios from 'axios';
import { setAlert } from './alert';
import { GET_GAMES, GAME_ERROR, DELETE_GAME, ADD_GAME } from './types';

// Get Games
export const getGames = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/games');
    dispatch({
      type: GET_GAMES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Game
export const deleteGame = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/games/${id}`);
    dispatch({
      type: DELETE_GAME,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Game
export const addGame = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(`/api/games`, formData, config);
    dispatch({
      type: ADD_GAME,
      payload: res.data,
    });
    dispatch(setAlert('Game Posted!'));
  } catch (err) {
    dispatch({
      type: GAME_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
