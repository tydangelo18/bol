import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

const SingleGameDoughnutChart = ({
  auth,
  game: { user, strikes, spares, openFrames },
}) => {
  // Initial State
  const state = {
    chartData: {
      labels: ['Strikes', 'Spares', 'Open Frames'],
      datasets: [
        {
          label: 'Strikes',
          data: [strikes, spares, openFrames],
          backgroundColor: [
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(54, 162, 235, 0.6)',
          ],
        },
      ],
    },
  };

  // Destructure State
  const { chartData } = state;

  return (
    !auth.loading &&
    user === auth.user._id && (
      <Fragment>
        <div>
          <div className='oneGameChart'>
            <Doughnut
              data={chartData}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </Fragment>
    )
  );
};

SingleGameDoughnutChart.propTypes = {
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(SingleGameDoughnutChart);