import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';
import CreateProfileMsg from './CreateProfileMsg';
import ProfileTop from './ProfileTop';
import '../../styles/profile/Profile.css';

const Profile = ({ deleteAccount, profile: { profile, loading }, auth }) => {
  return (
    <Fragment>
      {profile === null || loading ? (
        <CreateProfileMsg />
      ) : (
        <Fragment>
          <div className='profileDiv'>
            <ProfileTop profile={profile} />
          </div>
          {auth.isAuthenticated && auth.loading === false && (
            <div className='settingsDiv'>
              <Link to='/edit-profile'>
                <button className='editProfileBtn'>Edit Profile</button>
              </Link>
              <button
                onClick={() => deleteAccount()}
                className='deleteAccountBtn'
              >
                Delete Account
              </button>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  // See if user is logged in
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteAccount })(Profile);
