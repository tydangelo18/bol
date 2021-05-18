import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/profile/ProfileTitle.css';

const ProfileTitle = ({ auth: {user} }) => {
    return (
        <div className='title__container'>
            <div class="profile__title">
                <div class="profile_greeting">
                    <h1>{user && user.name}'s Profile</h1>
                    <p>Your bowling profile. </p>
                </div>
            </div>
        </div>
    )
}

ProfileTitle.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProfileTitle);
