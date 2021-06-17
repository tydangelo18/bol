import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/dashboard/DashboardMain.css';
import Profile from '../profiles/Profile';
import GamesLineChart from '../charts/GamesLineChart';
import StrikesLineChart from '../charts/StrikesLineChart';
import SparesLineChart from '../charts/SparesLineChart';
import OpenFramesLineChart from '../charts/OpenFramesLineChart';
import DisplayGameMain from '../games/DisplayGameMain';

const DashboardMain = ({ auth: { user } }) => {
  return (
    <main>
      <div className='main__container'>
        <div className='main__title'>
          <div className='main__greeting'>
            <h1>Hello, {user && user.name}.</h1>
            <p>Welcome to your bowling dashboard.</p>
          </div>
        </div>
        <Profile />

        <div className='charts'>
          <div className='charts__left'>
            <div className='charts__left__title'>
              <div>
                <h1>My Overall Progress</h1>
                <p>All Games</p>
              </div>
              <i className='fas fa-chart-line'></i>
            </div>
            <GamesLineChart />
          </div>

          <DisplayGameMain />
        </div>
      </div>
      <div className='charts__left'>
        <StrikesLineChart />
      </div>
      <div className='charts__left'>
        <SparesLineChart />
      </div>
      <div className='charts__left'>
        <OpenFramesLineChart />
      </div>
    </main>
  );
};

DashboardMain.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps)(DashboardMain);
