import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleGameMetrics from './SingleGameMetrics';
import TwoGameMetricsButton from './TwoGameMetricsButton';
import AllGameMetricsButton from './AllGameMetricsButton';
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
          <h6>Filters</h6>
          <TwoGameMetricsButton />
          <AllGameMetricsButton />
          <h5>Graph will display here</h5>
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
