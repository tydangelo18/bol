import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import '../../styles/profile/ProfileMain.css';

const ProfileMain = ({ profile: { profile, loading }, auth }) => {
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <main className='profileMain___main'>
          <ProfileTop profile={profile} />

          {auth.isAuthenticated && auth.loading === false && (
            <div className='settingsDiv'>
              <Link to='/edit-profile'>
                <button className='editProfileBtn'>Edit Profile</button>
                <button className='deleteAccountBtn'>Delete Account</button>
              </Link>
            </div>
          )}
        </main>
      )}
    </Fragment>
  );
};

ProfileMain.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  // See if user is logged in
  auth: state.auth,
});

export default connect(mapStateToProps)(ProfileMain);
