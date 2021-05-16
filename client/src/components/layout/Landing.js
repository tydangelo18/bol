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
    <div className='landing_page'>
      <Navbar />
      <div className='home'>
        <div className='home_container'>
          <h1 className='home_title'>Welcome to bol!</h1>
          <p className='home_description'>
            An analytics app for bowlers to track progress.{' '}
          </p>

          <Link to='/register'>
            <button className='register_button'>Get Started</button>
          </Link>
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
