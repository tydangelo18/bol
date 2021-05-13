import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import '../../styles/auth/Register.css';
import logo from '../../styles/auth/bol-2.png';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    // Initial State
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  // Destructure to pull above state from formData
  const { name, email, password, password2 } = formData;

  // Form Change Method
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Form Submission Method
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if Registered
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='split-screen'>
        <div className='left'>
          <section className='copy'>
            <h1>Welcome to bol!</h1>
            <p>An analytics app for bowlers to track their progress. </p>
          </section>
        </div>
        <div className='right'>
          <form onSubmit={(e) => onSubmit(e)}>
            <section className='copy'>
            <img className='logo' src={logo} alt='bol' />
              <h1>Sign Up</h1>
              <div class='login-container'>
                <p>
                  Already have an account?{' '}
                  <Link className='sign-in' to='/login'>
                    Sign In
                  </Link>
                </p>
              </div>
            </section>
            <div className='input-container name'>
              <label for='name'>Name</label>
              <input
                id='fname'
                type='text'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
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
            <div className='input-container passwordTwo'>
              <label for='password2'>Confirm Password</label>
              <input
                id='passwordTwo'
                type='password'
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
              />
            </div>

            <input className='signup-btn' type='submit' value='Register' />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { setAlert, register })(Register);
