import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import '../../styles/sidebar/SideBar.css';
import navLogo from '../../styles/navbar/bol-2.png';

const SideBar = ({
  sidebarOpen,
  closeSideBar,
  auth: { isAuthenticated, loading },
  logout,
}) => {
  const guestLinks = (
    <div className='links'>
      <Link to='/register'>Register</Link>

      <Link to='/login'>Login</Link>
    </div>
  );
  return (
    <div className={sidebarOpen ? 'sidebar-responsive' : ''} id='sidebar'>
      <div className='sidebar__title'>
        <div className='sidebar__img'>
          <img src={navLogo} style={{ width: '50px' }} alt='bol' />
        </div>
        <i
          className='fa fa-times'
          id='sidebarIcon'
          onClick={() => closeSideBar()}
        ></i>
      </div>

      <div className='sidebar__menu'>
        <div className='sidebar__link'>
          <i className='fas fa-home'></i>
          <Link to='/dashboard'>
            <span className='dashLink'>Dashboard</span>
          </Link>
        </div>

        <div className='sidebar__link'>
          <i className='fas fa-plus'></i>
          <Link to='/games'>
            <span className='gamesLink'>Record Games</span>
          </Link>
        </div>

        <div className='sidebar__link'>
          <i className='fas fa-poll'></i>
          <Link to='/metrics'>
            <span className='gamesLink'>View Metrics</span>
          </Link>
        </div>

        
          {!loading && (
            <div className='sidebar__link'>
            <i class="fas fa-sign-out-alt"></i>
              {isAuthenticated ? (
                <a onClick={logout} href='#!'>
                  <span className='dashLink'>Logout</span>
                </a>
              ) : (
                guestLinks
              )}
            </div>
          )}
        
      </div>
    </div>
  );
};

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(SideBar);
