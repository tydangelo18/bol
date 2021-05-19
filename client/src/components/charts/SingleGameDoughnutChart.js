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
            'rgb(255,99,132)',
            'rgb(54,162,235)',
            'rgb(75,192,192)',
          ],
          hoverOffset: 4,
          borderColor: 'rgb(238,238,238)',
          borderWidth: 2,
          width: '60px',
          height: '60px',
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
            <div className='games__div'>
              <div className='games__div__title'>
                <div>
                  <h1>My Chart</h1>
                  <p>
                    Strikes, Spares, and Open Frames Compared Against One
                    Another.
                  </p>
                </div>
                <i className="fas fa-balance-scale-right"></i>
              </div>
              <div
                className='oneGameChart'
                style={{
                  position: 'relative',
                  height: '40vh',
                  width: '40vw',
                }}
              >
                <Doughnut
                  data={chartData}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                  }}
                />
              </div>
            </div>
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
