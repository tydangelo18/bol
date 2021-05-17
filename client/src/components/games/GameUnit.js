import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteGame } from '../../actions/game';
import { connect } from 'react-redux';
import '../../styles/game/GameUnit.css';

const GameUnit = ({
  auth,
  game: { _id, user, score, strikes, spares, openFrames, date },
  deleteGame,
}) => {
  return (
    !auth.loading &&
    user === auth.user._id && (
      <Fragment>
        <div className='games__div'>
          <div className='games__div__title'>
            <div>
              <h1>My Game</h1>
              <p>
                <Moment format='MM/DD/YYYY'>{date}</Moment>
              </p>
            </div>
            <i class='fas fa-bowling-ball'></i>
          </div>
          <div className='games__div__cards'>
            <div className='gamesCardOne'>
              <h1>Score</h1>
              <p>{score}</p>
            </div>
            <div className='gamesCardTwo'>
              <h1>Strikes</h1>
              <p>{strikes}</p>
            </div>
            <div className='gamesCardThree'>
              <h1>Spares</h1>
              <p>{spares}</p>
            </div>
            <div className='gamesCardFour'>
              <h1>Open</h1>
              <p>{openFrames}</p>
            </div>
          </div>
          <div className='cardBtnDiv'>
            <Link to={`/games/${_id}`}>
              <button className='viewFrameBtn'>View Frame</button>{' '}
            </Link>
            <button
              onClick={(e) => deleteGame(_id)}
              type='button'
              className='deleteGameBtn'
            >
              Delete
            </button>
          </div>
        </div>
      </Fragment>
    )
  );
};

GameUnit.propTypes = {
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteGame })(GameUnit);
