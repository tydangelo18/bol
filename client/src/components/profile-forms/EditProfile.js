import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import '../../styles/edit-profile/EditProfile.css';

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
  }, [
    loading,
    getCurrentProfile,
    profile.location,
    profile.handicap,
    profile.yearsActive,
  ]);

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
      <div className='editForm_container'>
        <h3 className='edit-input-title'>Edit Your Profile</h3>

        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-input-container location'>
            <label className='edit-input-label'>
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
          <div className='form-input-container handicap'>
            <label className='edit-input-label'>
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
          <div className='form-input-container yearsActive'>
            <label className='edit-input-label'>
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
          <div className='editProfile-btn-container'>
            <Link to='/dashboard'>
              <button className='backDashboard-btn'>
                <i class='fas fa-arrow-left'></i>
                {' '}Dashboard
              </button>
            </Link>
            <input
              type='submit'
              className='editProfile-btn'
              value='Update Profile'
            />
          </div>
        </form>
      </div>
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
