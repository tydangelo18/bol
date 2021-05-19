import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

const SingleGameBarChart = ({
  auth,
  game: { user, strikes, spares, openFrames },
}) => {
  // Initial State
  const state = {
    chartData: {
      labels: ['Strikes', 'Spares', 'Open Frames'],
      datasets: [
        {
          label: 'Data',
          data: [strikes, spares, openFrames],

          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(75,192,192,0.2)',
          ],
          borderColor: [
            'rgb(255,99,132)',
            'rgb(54,162,235)',
            'rgb(75,192,192)',
          ],
          borderWidth: 1,
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
                <i className='fas fa-balance-scale-right'></i>
              </div>
              <div
                className='barChart'
                style={{ position: 'relative', height: '40vh', width: '45vw' }}
              >
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                      display: false,
                    },
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

SingleGameBarChart.propTypes = {
  game: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(SingleGameBarChart);
