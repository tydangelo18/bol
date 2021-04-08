import React, { Fragment, useState } from 'react';
import { TextField } from '@material-ui/core';

const Register = () => {
  const [formData, setFormData] = useState({
    // Initial State
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  // Pull out key:value pairs from initial state by destructuring
  const { name, email, password, password2 } = formData;

  // Change State for the form
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit Updated State from the form
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log(`Passwords do not match`);
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
    </Fragment>
  );
};

export default Register;
