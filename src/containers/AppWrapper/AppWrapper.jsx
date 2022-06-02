import styles from './AppWrapper.module.scss';
import { TopBar } from '../../components/TopBar/TopBar';
import { BottomBar } from '../../components/BottomBar/BottomBar';

export const AppWrapper = ({ children }) => {
  return (
    <div data-testid="layout" className={styles.AppWrapper}>
      <TopBar />
      <div className={styles.content}>{children}</div>
      <BottomBar />
    </div>
  );
};
