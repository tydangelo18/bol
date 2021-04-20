import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    location: '',

    handicap: '',

    yearsActive: '',
  });

  // Update Profile
  useEffect(() => {
    getCurrentProfile();
    setFormData({
      // When user goes to update, the will see fields they already have filled in previously
      location: loading || !profile.location ? '' : profile.location,
      handicap: loading || !profile.handicap ? '' : profile.handicap,
      yearsActive: loading || !profile.yearsActive ? '' : profile.yearsActive,
    });
  }, [loading, getCurrentProfile]);

  // Destructure formData
  const { location, handicap, yearsActive } = formData;

  // Input Method to change state
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // onSubmit Form Method
  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
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

const mapStateToProps = (state) => ({
  profile: state.profile,
});

EditProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  EditProfile
);
