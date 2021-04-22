import axios from 'axios';
import { GET_GAMES, GAME_ERROR, DELETE_GAME } from './types';

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
