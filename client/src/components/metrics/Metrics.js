import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Metrics = ({ auth }) => {
  return (
    auth.isAuthenticated &&
    auth.loading === false && (
      <Fragment>
        <div>
          <Link to='/games'>Back to all games</Link>
          <h4>Metrics Page</h4>
          <h6>Graph will display here</h6>
          <h6>Metrics Figures will display below</h6>
        </div>
      </Fragment>
    )
  );
};

Metrics.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Metrics);
