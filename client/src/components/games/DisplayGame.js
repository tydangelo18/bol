import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteGame } from '../../actions/game';
import { connect } from 'react-redux';
import '../../styles/game/DisplayGame.css';

const DisplayGame = ({
  auth,
  game: { _id, user, score, strikes, spares, openFrames, date },
  deleteGame,
}) => {
  return (
    !auth.loading &&
    user === auth.user._id && (
      <Fragment>
        <div className='displayGames__div'>
          <div className='displayGames__div__title'>
            <div>
              <h1>Most Recent Game</h1>
              <p>
                <Moment format='MM/DD/YYYY'>{date}</Moment>
              </p>
            </div>
            <i className='fas fa-bowling-ball'></i>
          </div>
          <div className='displayGames__div__cards'>
            <div className='displayGamesCardOne'>
              <h1>Score</h1>
              <p>{score}</p>
            </div>
            <div className='displayGamesCardTwo'>
              <h1>Strikes</h1>
              <p>{strikes}</p>
            </div>
            <div className='displayGamesCardThree'>
              <h1>Spares</h1>
              <p>{spares}</p>
            </div>
            <div className='displayGamesCardFour'>
              <h1>Open</h1>
              <p>{openFrames}</p>
            </div>
          </div>
          <div className='cardBtnDiv'>
            <Link to={`/games/${_id}`}>
              <button className='viewFrameBtn'>View Frame</button>{' '}
            </Link>
          </div>
        </div>
      </Fragment>
    )
  );
};

DisplayGame.propTypes = {
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteGame })(DisplayGame);
