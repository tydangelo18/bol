import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Navbar from '../layout/Navbar';
import SideBar from '../layout/SideBar.js';
import DashboardMain from './DashboardMain';

import '../../styles/dashboard/Dashboard.css';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSideBar = () => {
    setSidebarOpen(true);
  };
  const closeSideBar = () => {
    setSidebarOpen(false);
  };

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='container'>
        <Navbar sidebarOpen={sidebarOpen} openSideBar={openSideBar} />
        <DashboardMain />
        <SideBar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />

        {profile !== null ? (
          <Fragment>
            <div>
              
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>
              You have not set up your profile info, to create it, click below:
            </p>
            <Link to='/create-profile'>Create profile</Link>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
