import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { getGames } from '../../actions/game';

const GamesLineChart = ({ getGames, game: { games } }) => {
  useEffect(() => {
    getGames();
  }, [getGames]);

  const [chartData, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'My Overall Progress',
        data: [],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  // const { labels } = chartData;

  // Push Data Method
  const pushChartData = () => {
    // const { data } = chartData.datasets[0];
    // console.log(data);
    // console.log(games);
    
    // setData(games.map((game) => data.push(game.date)));
    // console.log(labels);
    
    setData((existing) => ({
      ...existing,
      datasets: [
        {
          ...existing.datasets[0],
          data: [
            ...existing.datasets[0].data,
            ...games.map(({ score }) => score),
          ],
        },
      ],
    }));
  };

  pushChartData();

  return (
    <Fragment>
      <div>
        <div
          className='allGameChart'
          style={{ position: 'relative', height: '40vh', width: '45vw' }}
        >
          <Line data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </Fragment>
  );
};

GamesLineChart.propTypes = {
  getGames: PropTypes.func.isRequired,
  game: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps, { getGames })(GamesLineChart);
