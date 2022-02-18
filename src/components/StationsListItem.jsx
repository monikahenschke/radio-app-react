import React from 'react';
import styles from './StationsListItem.module.scss';

const StationsListItem = ({ title, title2, children, ...props }) => {
  return (
    <div className={styles.StationsListItem}>
      <span className={styles.StationsListItem__name}>{title} </span>
      <span className={styles.StationsListItem__link}>{title2}</span>
      {children}
    </div>
  );
};

export default StationsListItem;
