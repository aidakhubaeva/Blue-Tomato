import styles from './AppHeader.module.css';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles['app-header']}>
      <div className={styles.leftText} onClick={() => navigate('/login')}>
        Login / Sign In
      </div>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <h1 className={styles['logo__title']}>blue tomato</h1>
      </div>
      <div className={styles.rightText} onClick={() => navigate('/cart')}>
        Cart
      </div>
    </header>
  );
};

export default AppHeader;