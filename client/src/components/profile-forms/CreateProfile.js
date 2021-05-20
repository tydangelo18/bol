import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import '../../styles/create-profile/CreateProfile.css';

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
      <div className='createForm_container'>
        <h1 className='large text-primary'>Create Your Profile</h1>

        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='create-input-container location'>
            <label className='create-input-label'>
              Where you primarily bowl/reside: city & state suggested (eg.
              Phoenix, AZ)
            </label>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='create-input-container handicap'>
            <label className='create-input-label'>
              This is your average score. (If you're not sure, just guess)
            </label>
            <input
              type='text'
              placeholder='handicap'
              name='handicap'
              value={handicap}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='create-input-container yearsActive'>
            <label className='create-input-label'>
              Around how many years have you been bowling?
            </label>
            <input
              type='text'
              placeholder='Years Active'
              name='yearsActive'
              value={yearsActive}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className='createProfile-btn-container'>
            <input
              type='submit'
              className='createProfile-btn'
              value='Create Profile'
            />
            <Link to='/dashboard'>
              <button className='backDashboard-btn'>
                <i class='fas fa-arrow-left'></i>
                {''}Dashboard
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(CreateProfile);
