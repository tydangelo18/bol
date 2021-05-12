import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleGameMetrics from './SingleGameMetrics';
import OneMoreMetric from './OneMoreMetric';
import { getGames } from '../../actions/game';

const Metrics = ({ auth, getGames, game: { games } }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);
  return (
    auth.isAuthenticated &&
    auth.loading === false && (
      <Fragment>
        <div>
          <Link to='/games'>Back to all games</Link>
          <h4>Metrics</h4>

          <OneMoreMetric />

          <h5>Graph will display here</h5>
          <h6>All Metrics</h6>
          <div>
            {games.map((game) => (
              <SingleGameMetrics key={game._id} game={game} />
            ))}
          </div>
        </div>
      </Fragment>
    )
  );
};

Metrics.propTypes = {
  auth: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(Metrics);
