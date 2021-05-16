import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import '../../styles/auth/Login.css';
import logo from '../../styles/auth/bol-2.png';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    // Initial State
    email: '',
    password: '',
  });

  // Pull out key:value pairs from initial state by destructuring
  const { email, password } = formData;

  // Change State for the form
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit Updated State from the form
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in to games page
  if (isAuthenticated) {
    return <Redirect to='/games' />;
  }

  return (
    <Fragment>
      <div className='split-screen'>
        <div className='leftSide'>
          <form onSubmit={(e) => onSubmit(e)}>
            <section className='copy'>
              <img className='logo' src={logo} alt='bol' />
              <h1>Sign In</h1>
              <div class='login-container'>
                <p>
                  Don't have an account?{' '}
                  <Link className='sign-up' to='/register'>
                    Sign Up
                  </Link>
                </p>
              </div>
            </section>
            <div className='input-container email'>
              <label for='email'>Email</label>
              <input
                id='email'
                type='email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='input-container password'>
              <label for='password'>Password</label>
              <input
                id='password'
                type='password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>

            <input className='signin-btn' type='submit' value='Login' />
          </form>
        </div>
        <div className='rightSide'>
          <section className='copy'>
            <h1>Welcome to bol!</h1>
            <p>An analytics app for bowlers to track their progress. </p>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { login })(Login);
