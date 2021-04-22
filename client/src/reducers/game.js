import { GET_GAMES, GAME_ERROR, DELETE_GAME } from '../actions/types';

const initialState = {
  games: [],
  game: null,
  loading: true,
  error: {},
};

function game(state = initialState, action) {
  // Destructure Action
  const { type, payload } = action;

  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
        loading: false,
      };
    case DELETE_GAME:
      return {
        ...state,
        // Games that were not deleted remain in the games array
        games: state.games.filter((game) => game._id !== payload),
        loading: false,
      };
    case GAME_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default game;
