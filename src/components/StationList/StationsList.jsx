import React from 'react';

import styles from './StationsList.module.scss';

export const StationsList = ({ children, ...props }) => {
  return (
    <>
      <ul data-testid="stationsList" className={styles.stationsList}>
        {React.Children.map(children, (child) => (
          <li className="station">{child}</li>
        ))}
      </ul>
    </>
  );
};

StationsList.whyDidYouRender = true;
export default StationsList;
