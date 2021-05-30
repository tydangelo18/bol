import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { getGames } from '../../actions/game';
// import Spinner from '../layout/Spinner';

const GamesLineChart = ({ getGames, game: { games }, auth }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  const chartData = {
    labels: (
      games.filter((game) => {
        return game.user === auth.user._id;
      }) || []
    ).map(({ score }, i) => 'Game ' + (i + 1)),
    datasets: [
      {
        label: 'Score',
        data: (
          games.filter((game) => {
            return game.user === auth.user._id;
          }) || []
        )
          .map(({ score }) => score)
          .reverse(),
        fill: true,
        borderColor: 'rgb(0,0,0)',
        tension: 0.1,
      },
    ],
  };

  const showChartData = () => {
    console.log(chartData);
  };

  showChartData();

  return (
    <div>
      <div
        className='allGameChart'
        style={{ position: 'relative', height: '40vh', width: '45vw' }}
      >
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                min: 0,
                max: 300,
                ticks: {
                  stepSize: 25,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

GamesLineChart.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
  auth: state.auth,
});

export default connect(mapStateToProps, { getGames })(GamesLineChart);
