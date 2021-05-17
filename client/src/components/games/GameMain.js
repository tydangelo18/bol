import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGames } from '../../actions/game';
import GameInput from '../games/GameInput';
import Spinner from '../layout/Spinner';
import GameUnit from './GameUnit';
import GamesLineChart from '../charts/GamesLineChart';
import '../../styles/game/GameMain.css';

const GameMain = ({ auth: { user }, getGames, game: { games, loading } }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  return loading ? (
    <Spinner />
  ) : (
    <main>
      <div class='main__container'>
        <div class='main__title'>
          <div class='main__greeting'>
            <h1>{user && user.name}'s Games</h1>
            <p>Your Past Games.</p>
          </div>
        </div>
        <GameInput />
        <div className='gamesDiv'>
          {games.map((game) => (
            <GameUnit key={game._id} game={game} />
          ))}
        </div>

        <div className='chart__container'>
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
        </div>
      </div>
    </main>
  );
};

GameMain.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(GameMain);
