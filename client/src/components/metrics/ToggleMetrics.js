import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGames } from '../../actions/game';
import SingleGameMetrics from './SingleGameMetrics';
import '../../styles/metrics/ToggleMetrics.css';

const ToggleMetrics = ({ auth, getGames, game: { games } }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  const [itemCount, setCount] = useState(3);

  // View More Method
  const viewMoreMetrics = () => {
    setCount(itemCount >= games.length ? itemCount : itemCount + 1);
  };
  // View Less Method
  const viewLessMetrics = () => {
    setCount(itemCount <= 1 ? itemCount : itemCount - 1);
  };
  return (
    auth.isAuthenticated &&
    auth.loading === false && (
      <Fragment>
        <div className='toggleMetrics_container'>
          <h3 className='featured-metrics-title'>Most Recent Metrics</h3>
          <p className='toggleMetrics-sub-title'>Toggle through metrics. </p>
          <div className='featured-metrics-container'>
            {games.slice(0, itemCount).map((game) => (
              <SingleGameMetrics key={game._id} game={game} />
            ))}
          </div>
          <div className='toggleMetricsBtn__container'>
            <button className='viewMoreBtn' onClick={(e) => viewMoreMetrics(e)}>
              View More <i className='fas fa-plus'></i>
            </button>
            <button className='viewLessBtn' onClick={(e) => viewLessMetrics(e)}>
              View Less <i className='fas fa-minus'></i>
            </button>
          </div>
        </div>
      </Fragment>
    )
  );
};

ToggleMetrics.propTypes = {
  auth: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(ToggleMetrics);
