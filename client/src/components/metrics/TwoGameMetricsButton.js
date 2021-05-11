import React from 'react';

const TwoGameMetricsButton = () => {
  // Method
  const generateTwoGames = (e) => {
    // TODO ---> Pass in the games array as a prop and slice the array to get the first two games in the array: `games.slice(0, 2)`
    // THEN ---> Get Metrics for those games (map games with <SingleGameMetrics />)
    console.log('Two Most Recent Games Filtered');
  };
  return (
    <div>
      <button onClick={(e) => generateTwoGames(e)}>Recent Games</button>
    </div>
  );
};

export default TwoGameMetricsButton;
