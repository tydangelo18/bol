import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGame } from '../../actions/game';
import '../../styles/game/GameInput.css';

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
      <div className='gameForm_container'>
        <h3 className='game-input-title'>Record a Game</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='game-input-container score'>
            <label className='game-input-label'>Your score for this game</label>
            <input
              type='number'
              placeholder='Score'
              name='score'
              value={score}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='game-input-container strikes'>
            <label className='game-input-label'>
              # of Strikes hit this game
            </label>
            <input
              type='number'
              placeholder='Strikes'
              name='strikes'
              value={strikes}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='game-input-container spares'>
            <label className='game-input-label'>
              # of Spares hit this game
            </label>
            <input
              type='number'
              placeholder='Spares'
              name='spares'
              value={spares}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='game-input-container open'>
            <label className='game-input-label'>
              # of frames with pins left standing
            </label>
            <input
              type='number'
              placeholder='Open Frames'
              name='openFrames'
              value={openFrames}
              onChange={(e) => onChange(e)}
            />
          </div>

          <input className='createGame-btn' type='submit' value='Create Game' />
        </form>
      </div>
    </Fragment>
  );
};

GameInput.propTypes = {
  addGame: PropTypes.func.isRequired,
};

export default connect(null, { addGame })(GameInput);
