import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import '../../styles/profile/ProfileMain.css';

const ProfileMain = ({
  deleteAccount,
  profile: { profile, loading },
  auth,
}) => {
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
              </Link>
              <button
                onClick={() => deleteAccount()}
                className='deleteAccountBtn'
              >
                Delete Account
              </button>
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
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  // See if user is logged in
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteAccount })(ProfileMain);
