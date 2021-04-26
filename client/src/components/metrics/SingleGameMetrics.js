import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SingleGameMetrics = ({
  auth,
  game: { user, strikes, spares, openFrames },
}) => {
  return (
    !auth.loading &&
    user === auth.user._id && (
      <Fragment>
        <div>
          <h4>Frame Statistics</h4>
        </div>
        <div>
          <p>Strikes Ratio: {strikes / 10}</p>
        </div>
        <div>
          <p>Spares Ratio: {spares / 10}</p>
        </div>
        <div>
          <p>Open Frames Ratio: {openFrames / 10}</p>
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
