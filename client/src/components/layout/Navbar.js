import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import '../../styles/navbar/Navbar.css';
// import navLogo from '../../styles/navbar/bol-2.png';
import { GrMenu } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
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
          <span>Record Games</span>
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
    <nav>
      <div>
        <Link to='/'>
          {
            // <img src={navLogo} alt='bol' />
          }
        </Link>
      </div>
      <div>
        <GrMenu />
      </div>

      <div>
        <div>
          <AiOutlineClose />
        </div>
      </div>
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
