import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import '../../styles/navbar/Navbar.css';
import navLogo from '../../styles/navbar/bol-2.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [click, setState] = useState({
    clicked: false,
  });

  const handleClick = (e) => {
    setState({ clicked: !click.clicked });
  };

  const authLinks = (
    <ul>
      <li>
        <Link to='/profile'>
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/games'>
          <span>Games</span>
        </Link>
      </li>
      <li>
        <Link to='/metrics'>
          <span>Metrics</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    
      <nav className='navbar'>
        <h1>
          <Link to='/'>
            <img
              src={navLogo}
              style={{ width: '50px', height: '30px' }}
              alt='bol'
            />
          </Link>
        </h1>
        {
          //   <div className='menu-icon' onClick={(e) => handleClick(e)}>
          //   <i className={click.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          // </div>
        }

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
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
