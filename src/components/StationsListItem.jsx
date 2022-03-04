import React from 'react';
import styles from './StationsListItem.module.scss';
import Button from './Button';
import { ReactComponent as playLarge } from '../images/play-large.svg';

const StationsListItem = ({ title, title2, button, ...props }) => {
  return (
    <div className={styles.StationsListItem}>
      <span className={styles.StationsListItem__name}>{title} </span>
      <span className={styles.StationsListItem__link}>{title2}</span>
      {button ? (
        <Button
          onClick={() => {}}
          iconOnly={true}
          icon={playLarge}
          children={title}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default StationsListItem;
