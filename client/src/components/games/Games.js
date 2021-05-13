import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGames } from '../../actions/game';
import GameUnit from './GameUnit';
import GameInput from './GameInput';
// import GamesLineChart from '../charts/GamesLineChart';
import Spinner from '../layout/Spinner';

const Games = ({ getGames, game: { games, loading } }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Games</h1>
      <p>Here are your past games:</p>
      <GameInput />
      <div>
        {games.map((game) => (
          <GameUnit key={game._id} game={game} />
        ))}
      </div>

      {
        // <GamesLineChart />
      }
    </Fragment>
  );
};

Games.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(Games);
