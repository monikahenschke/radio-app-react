import { array } from 'prop-types';
import React from 'react';
import Button from './Button';

export const StationsList = ({ stations, handleSelect, ...props }) => {
  if (!stations || stations.length === 0) {
    const textError =
      'Your stations array is empty! You need to have at least one station to create the StationsList component.';
    throw new Error(textError);
  }
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
