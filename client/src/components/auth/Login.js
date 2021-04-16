import React, { Fragment, useState } from 'react';
import { TextField } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

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

  // Redirect if logged in to dashboard
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1>Sign In</h1>
      <p>Sign Into Your Account</p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <TextField
            id='standard-basic'
            label='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <TextField
            id='standard-basic'
            label='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='submit-group'>
          <input className='LoginBtn' type='submit' value='Login' />
        </div>
      </form>
      <p>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
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
