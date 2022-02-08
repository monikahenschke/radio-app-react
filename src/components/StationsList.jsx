import { array } from 'prop-types';
import React from 'react';
import Button from './Button';

export const StationsList = ({ stations, handleSelect, ...props }) => {
  return (
    <ul data-testid="stationsList">
      {stations.map((station) => (
        <li className="station" key={station.id}>
          <Button
            onClick={() => handleSelect(station.link)}
            children={station.name}
          ></Button>
        </li>
      ))}
    </ul>
  );
};
StationsList.propTypes = {
  stations: array.isRequired,
};
export default StationsList;
