import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import '../../styles/navbar/Navbar.css';
// import navLogo from '../../styles/navbar/bol-2.png';

const Navbar = ({
  auth: { isAuthenticated, loading },
  logout,
  sidebarOpen,
  openSideBar,
}) => {
  const guestLinks = (
    <div className='links'>
      <Link to='/register'>Register</Link>

      <Link to='/login'>Login</Link>
    </div>
  );

  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSideBar()}>
        <i className='fa fa-bars'></i>
      </div>
      <div className='navbar__left'>
        
      </div>
      <div className='navbar__right'>
        {!loading && (
          <div className='links'>
            {isAuthenticated ? (
              <a onClick={logout} href='#!'>
                <span className='logoutLink'>Logout</span>
              </a>
            ) : (
              guestLinks
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
