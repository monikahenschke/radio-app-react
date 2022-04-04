import React from 'react';
import styles from './StationsList.module.scss';

export const StationsList = ({ handleSelect, children, ...props }) => {
  return (
    <ul data-testid="stationsList" className={styles.stationsList}>
      {React.Children.map(children, (child) => (
        <li className="station">{child}</li>
      ))}
    </ul>
  );
};

export default StationsList;
