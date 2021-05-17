import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/dashboard/DashboardMain.css';
import Profile from '../profiles/Profile';
import GamesLineChart from '../charts/GamesLineChart';

const DashboardMain = ({ auth: { user } }) => {
  return (
    <main>
      <div class='main__container'>
        <div class='main__title'>
          <div class='main__greeting'>
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
              <i class='fas fa-chart-line'></i>
            </div>
            <GamesLineChart />
          </div>

          <div className='charts__right'>
            <div className='charts__right__title'>
              <div>
                <h1>My Games</h1>
                <p>All Recorded Games</p>
              </div>
              <i class='fas fa-bowling-ball'></i>
            </div>
            <div className='charts__right__cards'>
              <div className='card1'>
                <h1>Score</h1>
                <p>231</p>
              </div>
              <div className='card2'>
                <h1>Strikes</h1>
                <p>7</p>
              </div>
              <div className='card3'>
                <h1>Spares</h1>
                <p>1</p>
              </div>
              <div className='card4'>
                <h1>Open </h1>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
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
