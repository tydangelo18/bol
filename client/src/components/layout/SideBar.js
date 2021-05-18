import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/sidebar/SideBar.css';
import navLogo from '../../styles/navbar/bol-2.png';

const SideBar = ({ sidebarOpen, closeSideBar }) => {
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

      <div class='sidebar__menu'>
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
      </div>
    </div>
  );
};

export default SideBar;
