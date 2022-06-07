import React, { useContext } from 'react';

import { StationsContext } from '../../context/StationsContext';
import { ReactComponent as playIconBig } from '../../images/play-large.svg';
import { ReactComponent as pauseIcon } from '../../images/pause.svg';

import Button from '../Button/Button';
import styles from './TopBar.module.scss';

export const TopBar = () => {
  const { stationCurrentlyPlaying, handlePlayPause, isRadioPlaying } =
    useContext(StationsContext);
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <p className={styles.headline}>currently playing:</p>
        <p className={styles.stationsName}>
          {!stationCurrentlyPlaying
            ? "Station's name"
            : stationCurrentlyPlaying}
        </p>
      </div>
      <Button
        size="big"
        iconOnly={true}
        icon={isRadioPlaying ? pauseIcon : playIconBig}
        onClick={() => {
          handlePlayPause();
        }}
      >
        Play!
      </Button>
    </div>
  );
};
