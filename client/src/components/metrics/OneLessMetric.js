import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGames } from '../../actions/game';
import SingleGameMetrics from './SingleGameMetrics';

const OneLessMetric = ({ auth, getGames, game: { games } }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  const [itemCount, setCount] = useState(0);

  // Method
  const viewMoreMetrics = () => {
    setCount(itemCount >= games.length ? itemCount : itemCount - 1);
  };
  return (
    auth.isAuthenticated &&
    auth.loading === false && (
      <Fragment>
        <div>
          {games.slice(0, itemCount).map((game) => (
            <SingleGameMetrics key={game._id} game={game} />
          ))}
          <button onClick={(e) => viewMoreMetrics(e)}>View Less -</button>
        </div>
      </Fragment>
    )
  );
};

OneLessMetric.propTypes = {
  auth: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(OneLessMetric);
