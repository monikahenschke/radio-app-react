import React from 'react';
import styles from './StationsListItem.module.scss';
import Button from './Button';
import { ReactComponent as playIconMedium } from '../images/play-medium.svg';
import { shortenUrl } from '../utils/shorten-url';

const StationsListItem = ({ title, title2, button, ...props }) => {
  return (
    <div className={styles.StationsListItem}>
      <div className={styles.container}>
        <span className={styles.name}>{title} </span>
        <span className={styles.link}>{shortenUrl(title2)}</span>
      </div>
      {button ? (
        <Button
          onClick={() => {}}
          iconOnly={true}
          icon={playIconMedium}
          children={title}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default StationsListItem;
