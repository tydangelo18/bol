import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGames } from '../../actions/game';
import Spinner from '../layout/Spinner';
import '../../styles/metrics/Metrics.css';
import SideBar from '../layout/SideBar';
import Navbar from '../layout/Navbar';
import MetricsMain from '../metrics/MetricsMain';

const Metrics = ({ auth, getGames, game: { games, loading } }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSideBar = () => {
    setSidebarOpen(true);
  };
  const closeSideBar = () => {
    setSidebarOpen(false);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='metrics__container'>
        <Navbar sidebarOpen={sidebarOpen} openSideBar={openSideBar} />
        <MetricsMain />
        <SideBar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />
      </div>
    </Fragment>
  );
};

Metrics.propTypes = {
  auth: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(Metrics);
