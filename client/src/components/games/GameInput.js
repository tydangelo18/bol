import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGame } from '../../actions/game';

const GameInput = ({ addGame }) => {
  const [formData, setFormData] = useState({
    score: 0,
    strikes: 0,
    spares: 0,
    openFrames: 0,
  });

  // Destructure formData
  const { score, strikes, spares, openFrames } = formData;

  // Input Method to change state
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value, 10) });
    
  };

  // onSubmit Form Method
  const onSubmit = (e) => {
    e.preventDefault();
    addGame(formData);
    console.log(typeof score);
    console.log(typeof strikes);
    console.log(typeof spares);
    console.log(typeof openFrames);
  };

  return (
    <Fragment>
      <h1>Record Your Stats</h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='number'
            placeholder='Score'
            name='score'
            value={score}
            onChange={(e) => onChange(e)}
          />
          <small>Your score for this game</small>
        </div>
        <div>
          <input
            type='number'
            placeholder='Stikes'
            name='strikes'
            value={strikes}
            onChange={(e) => onChange(e)}
          />
          <small># of Strikes hit this game</small>
        </div>
        <div>
          <input
            type='number'
            placeholder='Spares'
            name='spares'
            value={spares}
            onChange={(e) => onChange(e)}
          />
          <small># of Spares hit this game</small>
        </div>
        <div>
          <input
            type='number'
            placeholder='Open Frames'
            name='openFrames'
            value={openFrames}
            onChange={(e) => onChange(e)}
          />
          <small># of frames with pins left standing</small>
        </div>

        <input type='submit' />
        <Link className='btn btn-light my-1' to='/profile'>
          Back to Profile
        </Link>
      </form>
    </Fragment>
  );
};

GameInput.propTypes = {
  addGame: PropTypes.func.isRequired,
};

export default connect(null, { addGame })(GameInput);
