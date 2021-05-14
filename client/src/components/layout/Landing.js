import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import '../../styles/landing/Landing.css';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    <Redirect to='/dashboard' />;
  }
  return (
    <div>
      <Navbar />

      <div className='home'>
        <div className='home_container'>
          <div className='home_data'>
            <h1 className='home_title'>Welcome to bol!</h1>
            <p className='home_description'>
              An analytics app for bowlers to track progress.{' '}
            </p>
            <Link className='register_button' to='/register'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
