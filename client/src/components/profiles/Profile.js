import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';

const Profile = ({ profile: { profile, loading }, auth }) => {
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {
            // User can update profile from viewing profile
          }
          {auth.isAuthenticated && auth.loading === false && (
            <Link to='/edit-profile'>Edit Profile</Link>
          )}
          <div className='profileDiv'>
            <ProfileTop profile={profile} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  // See if user is logged in
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
