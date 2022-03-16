import styles from './Layout.module.scss';
import { TopBar } from './TopBar';
import { BottomBar } from './BottomBar';

export const Layout = ({ children }) => {
  return (
    <div data-testid="layout" className={styles.Layout}>
      <TopBar />
      <div className={styles.content}>{children}</div>
      <BottomBar />
    </div>
  );
};
