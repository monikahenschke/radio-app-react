import { ReactComponent as playIconBig } from '../images/play-large.svg';
import Button from '../components/Button';
import styles from './TopBar.module.scss';

export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <p className={styles.headline}>currently playing:</p>
        <p className={styles.stationsName}>Station's name</p>
      </div>
      <Button size="big" iconOnly={true} icon={playIconBig} onClick={() => {}}>
        Play!
      </Button>
    </div>
  );
};
