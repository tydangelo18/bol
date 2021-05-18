import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SingleGameMetrics from './SingleGameMetrics';
import ToggleMetrics from './ToggleMetrics';
import { getGames } from '../../actions/game';
import '../../styles/metrics/MetricsMain.css';

const MetricsMain = ({ auth: { user }, auth, getGames, game: { games } }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);
  return (
    auth.isAuthenticated &&
    auth.loading === false && (
      <main>
        <div class='main__container'>
          <div class='main__title'>
            <div class='main__greeting'>
              <h1>{user && user.name}'s Metrics</h1>
              <p>Past Game Metrics.</p>
              <div>
                <Link to='/games'>
                  <button className='backAllGamesBtn'>
                    <i class='fas fa-arrow-left'></i>
                    {''}All Games
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <ToggleMetrics />

          <div class='metricsDiv'>
            {games.map((game) => (
              <SingleGameMetrics key={game._id} game={game} />
            ))}
          </div>
        </div>
      </main>
    )
  );
};

MetricsMain.propTypes = {
  auth: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(MetricsMain);
