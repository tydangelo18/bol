import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/profile/ProfileTop.css';

const ProfileTop = ({
  profile: {
    location,
    handicap,
    yearsActive,
    user: { name },
  },
}) => {
  return (
    <div className='main__cards'>
      <div className='card'>
        <i className='fas fa-map-marker-alt'></i>
        <div className='card_inner'>
          <p className='text-primary-p'>
            {location && (
              <span className='location'>{location}</span>
            )}
          </p>
        </div>
      </div>

      <div className='card'>
        <i className='fas fa-bowling-ball'></i>
        <div className='card_inner'>
          <p className='text-primary-p'>
            {handicap && (
              <span className='font-bold text-title'>{handicap}</span>
            )}{' '}
            Average
          </p>
        </div>
      </div>

      <div class='card'>
        <i className='fas fa-clock'></i>
        <div class='card_inner'>
          <p classname='text-primary-p'>
            Bowling for{' '}
            {yearsActive && (
              <span className='font-bold text-title'>{yearsActive}</span>
            )}{' '}
            years.
          </p>
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
