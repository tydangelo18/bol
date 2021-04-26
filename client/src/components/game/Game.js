import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getGame } from '../../actions/game';
import GameUnit from '../games/GameUnit';
import SingleGameMetrics from '../metrics/SingleGameMetrics';

const Game = ({ getGame, game: { game, loading }, match }) => {
  useEffect(() => {
    getGame(match.params.id);
  }, [getGame, match]);

  return loading || game === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/games'>Back to all games</Link>
      <GameUnit game={game} />
      <SingleGameMetrics game={game} />
    </Fragment>
  );
};

Game.propTypes = {
  getGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { getGame })(Game);
