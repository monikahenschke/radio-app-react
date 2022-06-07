import React, { useContext } from 'react';

import { StationsContext } from '../../context/StationsContext';
import styles from './StationsListItem.module.scss';
import Button from '../Button/Button';
import { ReactComponent as playIconMedium } from '../../images/play-medium.svg';
import { shortenUrl } from '../../utils/shorten-url';

const StationsListItem = ({ title, title2, button, ...props }) => {
  const { handleSelect } = useContext(StationsContext);
  return (
    <div className={styles.StationsListItem}>
      <div className={styles.container}>
        <span className={styles.name}>{title} </span>
        <span className={styles.link}>{shortenUrl(title2)}</span>
      </div>
      {button ? (
        <Button
          onClick={() => {
            handleSelect(title, title2);
          }}
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
