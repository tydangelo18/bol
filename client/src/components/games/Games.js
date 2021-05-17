import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGames } from '../../actions/game';
import GameUnit from './GameUnit';
import Spinner from '../layout/Spinner';
import '../../styles/game/Games.css';
import SideBar from '../layout/SideBar';
import Navbar from '../layout/Navbar';
import GameMain from '../games/GameMain';

const Games = ({ getGames, game: { games, loading } }) => {
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
      <div className='container'>
        <Navbar sidebarOpen={sidebarOpen} openSideBar={openSideBar} />
        <GameMain />
        <SideBar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />
        {
      //  <div className='gamesDiv'>
      // {games.map((game) => (
      //  <GameUnit key={game._id} game={game} />
      // ))}
      //  </div>
        }
        
      </div>
    </Fragment>
  );
};

Games.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(Games);
