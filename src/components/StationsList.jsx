import React from 'react';

export const StationsList = ({ handleSelect, children, ...props }) => {
  return (
    <ul data-testid="stationsList">
      {React.Children.map(children, (child) => (
        <li className="station">{child}</li>
      ))}
    </ul>
  );
};

export default StationsList;
