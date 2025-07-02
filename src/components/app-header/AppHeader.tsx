import styles from './AppHeader.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../public/images/blue-tomato_logo-black.png';

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles['app-header']}>
      <div className={styles.leftGroup}>
        <NavLink to="/login" className={styles.link}>Login</NavLink>
        <span className={styles.separator}>/</span>
        <NavLink to="/register" className={styles.link}>Register</NavLink>
      </div>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <img src={logo} alt="Blue Tomato Logo" className={styles['logo__img']} />
      </div>
      <div className={styles.rightText} onClick={() => navigate('/cart')}>
        <p>Cart</p>
      </div>
    </header>
  );
};

export default AppHeader;