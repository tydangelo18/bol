import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { getGames } from '../../actions/game';
// import Spinner from '../layout/Spinner';

const SparesLineChart = ({ getGames, game: { games }, auth }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  const chartData = {
    labels: (
      games.filter((game) => {
        return game.user === auth.user._id;
      }) || []
    ).map(({ spares }, i) => 'Game ' + (i + 1)),
    datasets: [
      {
        label: 'Spares',
        data: (
          games.filter((game) => {
            return game.user === auth.user._id;
          }) || []
        )
          .map(({ spares }) => spares)
          .reverse(),
        fill: true,
        borderColor: 'rgb(54,162,235)',
        backgroundColor: 'rgba(54,162,235,0.2)',
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
                max: 10,
                ticks: {
                  stepSize: 1,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

SparesLineChart.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
  auth: state.auth,
});

export default connect(mapStateToProps, { getGames })(SparesLineChart);
