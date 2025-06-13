import styles from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={styles['app-header']}>
      <div className={styles.leftText}>Login / Sign In</div>
      <div className={styles.logo}>
        <h1 className={styles['logo__title']}>blue tomato</h1>
      </div>
      <div className={styles.rightText}>Cart</div>
    </header>
  );
};

export default AppHeader;