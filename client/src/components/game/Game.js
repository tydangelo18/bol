import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGame } from '../../actions/game';
import GameUnit from '../games/GameUnit';
import Navbar from '../layout/Navbar';
import SingleGameMetrics from '../metrics/SingleGameMetrics';
import SingleGameDoughnutChart from '../charts/SingleGameDoughnutChart';
import SingleGameBarChart from '../charts/SingleGameBarChart';
import '../../styles/game/Game.css';

const Game = ({ getGame, game: { game, loading }, match }) => {
  useEffect(() => {
    getGame(match.params.id);
  }, [getGame, match]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSideBar = () => {
    setSidebarOpen(true);
  };

  return loading || game === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar sidebarOpen={sidebarOpen} openSideBar={openSideBar} />

      <main className='singleGame__main'>
        <div className='singleGameMain__container'>
          <div className='singleGameMain__title'>
            <div className='singleGameMain__greeting'>
              <h1>Single Game</h1>
              <p>Frame Stats with Metrics.</p>
            </div>
          </div>
          <Link to='/games'>
            <button className='backAllGamesBtn'>
              <i className='fas fa-arrow-left'></i>
              {''}All Games
            </button>
          </Link>

          <div className='singleGame__charts'>
            <GameUnit game={game} />
            <SingleGameMetrics game={game} />
          </div>
          <div className='singleChart__charts'>
            <SingleGameBarChart game={game} />
            <SingleGameDoughnutChart game={game} />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

Game.propTypes = {
  getGame: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { getGame })(Game);
