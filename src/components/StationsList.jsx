import React from 'react';
import Button from './Button';

export const StationsList = ({ stations, handleSelect, ...props }) => {
  return (
    <ul>
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
export default StationsList;
