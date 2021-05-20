import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles/metrics/SingleGameMetrics.css';

const SingleGameMetrics = ({
  auth,
  game: { user, score, strikes, spares, openFrames },
}) => {
  return (
    !auth.loading &&
    user === auth.user._id && (
      <Fragment>
        <div className='metrics__div'>
          <div className='metrics__div__title'>
            <div>
              <h1>Metrics</h1>
              <p>Strikes, Spares, and Open Frame Percentages.</p>
            </div>
            <i className='fas fa-percentage'></i>
          </div>
          <div className='metrics__div__cards'>
            <div className='metricsCardOne'>
              <h1>Score</h1>
              <p>{score}</p>
            </div>
            <div className='metricsCardTwo'>
              <h1>Strikes</h1>
              <p>{(strikes / 10) * 100}%</p>
            </div>
            <div className='metricsCardThree'>
              <h1>Spares</h1>
              <p>{(spares / 10) * 100}%</p>
            </div>
            <div className='metricsCardFour'>
              <h1>Open</h1>
              <p>{(openFrames / 10) * 100}%</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

SingleGameMetrics.propTypes = {
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(SingleGameMetrics);
