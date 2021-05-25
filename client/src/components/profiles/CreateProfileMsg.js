import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/create-profile/CreateProfileMsg.css';

const CreateProfile = () => {
  return (
    <Fragment>
      <div className='createProfileMsgDiv'>
        <p className='createProfileMsg'>
          You have not set up your profile info, to create it, click below:
        </p>
        <Link to='/create-profile'>
          <button className='createProfileLink'>Create profile</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default CreateProfile;
