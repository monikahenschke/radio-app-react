import React from 'react';
import styles from './StationsListItem.module.scss';
import Button from './Button';
import { ReactComponent as playMediumIcon } from '../images/play-medium.svg';
import { toShorterUrl } from '../utils/shorter-url';

const StationsListItem = ({ title, title2, button, ...props }) => {
  return (
    <div className={styles.StationsListItem}>
      <div className={styles.container}>
        <span className={styles.name}>{title} </span>
        <span className={styles.link}>{toShorterUrl(title2)}</span>
      </div>
      {button ? (
        <Button
          onClick={() => {}}
          iconOnly={true}
          icon={playMediumIcon}
          children={title}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default StationsListItem;
