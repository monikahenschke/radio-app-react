import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <div data-testid="layout" className={styles.Layout}>
      <div className={styles.topBar}>Currently playing</div>
      <div className={styles.content}>{children}</div>
      <div className={styles.bottomBar}>Add new</div>
    </div>
  );
};
