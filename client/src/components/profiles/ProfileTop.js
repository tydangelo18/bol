import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    location,
    handicap,
    yearsActive,
    user: { name },
  },
}) => {
  return (
    <div>
      <h1>{name}'s Profile</h1>
      {
        // If profile has a location, display it in a span
      }
      <p>From {location && <span>{location}</span>}</p>
      {
        // If profile has a handicap display it in a span
      }
      <p>{handicap && <span>{handicap}</span>} Average</p>
      {
        // If profile has yearsActive, display it in a span
      }
      <p>Bowling for {yearsActive && <span>{yearsActive}</span>} years.</p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
