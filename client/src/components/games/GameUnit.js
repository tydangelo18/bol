import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteGame } from '../../actions/game';
import { connect } from 'react-redux';


const GameUnit = ({
  auth,
  game: { _id, user, score, strikes, spares, openFrames, date },
  deleteGame,
}) => {
  return (
    !auth.loading &&
    user === auth.user._id && (
      <Fragment>
        <div>
          <p>
            Played On <Moment format='MM/DD/YYYY'>{date}</Moment>
          </p>
        </div>
        <div>
          <p>Score: {score}</p>
        </div>
        <div>
          <p>Strikes: {strikes}</p>
        </div>
        <div>
          <p>Spares: {spares}</p>
        </div>
        <div>
          <p>Open Frames: {openFrames}</p>
        </div>
        <button
          onClick={(e) => deleteGame(_id)}
          type='button'
          className='btn btn-danger'
        >
          Delete
        </button>
        <Link to={`/games/${_id}`}>View Frame Stats </Link>
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
