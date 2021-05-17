import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div>
      <Link to='/edit-profile'>
        <button className='editProfileBtn'>Edit Profile</button>
      </Link>
    </div>
  );
};

export default DashboardActions;
