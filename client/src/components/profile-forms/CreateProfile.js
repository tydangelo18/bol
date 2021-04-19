import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    location: '',

    handicap: '',

    yearsActive: '',
  });

  // Destructure formData
  const { location, handicap, yearsActive } = formData;

  // Input Method to change state
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // onSubmit Form Method
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>

      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Where you primarily bowl/reside: city & state suggested (eg.
            Phoenix, AZ)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='handicap'
            name='handicap'
            value={handicap}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            This is your average score. (If you're not sure, just guess)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Years Active'
            name='yearsActive'
            value={yearsActive}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Around how many years have you been bowling?
          </small>
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(CreateProfile);
