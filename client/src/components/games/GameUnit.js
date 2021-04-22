import React, { Fragment } from 'react';
import Moment from 'react-moment';

const GameUnit = ({
  game: { _id, score, strikes, spares, openFrames, date },
}) => {
  return (
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
    </Fragment>
  );
};

export default GameUnit;
