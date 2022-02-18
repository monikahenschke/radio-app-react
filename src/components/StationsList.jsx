import { array } from 'prop-types';
import React from 'react';
import StationsListItem from './StationsListItem';
import { ReactComponent as playLarge } from '../images/play-large.svg';

export const StationsList = ({
  stations,
  handleSelect,
  children,
  ...props
}) => {
  return (
    <ul data-testid="stationsList">
      {stations.map((station) => {
        const clonedChildren = React.cloneElement(children, {
          onClick: () => handleSelect(station.link),
          iconOnly: true,
          icon: playLarge,
          children: <p>{station.name}</p>,
        });

        return (
          <li className="station" key={station.id}>
            <StationsListItem title={station.name} title2={station.link}>
              {clonedChildren}
            </StationsListItem>
          </li>
        );
      })}
    </ul>
  );
};
StationsList.propTypes = {
  stations: array.isRequired,
};

export default StationsList;
