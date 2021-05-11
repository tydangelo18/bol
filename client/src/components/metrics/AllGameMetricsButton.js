import React from 'react';

const AllGameMetricsButton = () => {
  // Method
  const generateAllGames = (e) => {
    // TODO ---> Pass in the games array as a prop and return the games array using map
    // THEN ---> Get Metrics for those games (map games with <SingleGameMetrics />) - same as Metrics.js
    console.log('All Games Filtered');
  };
  return (
    <div>
      <button onClick={(e) => generateAllGames(e)}>All Games</button>
    </div>
  );
};

export default AllGameMetricsButton;
