import React, { Fragment, useState } from 'react';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
// Connect Component to Redux
import { connect } from 'react-redux';
// Bring in setAlert Action
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    // Initial State
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  // Pull out key:value pairs from initial state by destructuring
  const { name, email, password, password2 } = formData;

  // Change State for the form method
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit Updated State from the form method
  const onSubmit = async (e) => {
    e.preventDefault();
    // Display setAlert Action if password and confirm password do not match
    if (password !== password2) {
      setAlert(`Passwords do not match!`);
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <h1>Sign Up</h1>
      <p>Create an Account</p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <TextField
            id='standard-basic'
            label='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
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
        <div className='form-group'>
          <TextField
            id='standard-basic'
            label='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='submit-group'>
          <input className='registerBtn' type='submit' value='Create Account' />
        </div>
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
