import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGames } from '../../actions/game';
import Spinner from '../layout/Spinner';
import DisplayGame from './DisplayGame';

import '../../styles/game/DisplayGameMain.css';

const DisplayGameMain = ({
  auth: { user },
  getGames,
  game: { games, loading },
}) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='gamesDiv'>
      {games.slice(0, 1).map((game) => (
        <DisplayGame key={game._id} game={game} />
      ))}
    </div>
  );
};

DisplayGameMain.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(DisplayGameMain);
