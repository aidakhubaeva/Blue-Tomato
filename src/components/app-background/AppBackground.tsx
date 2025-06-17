import styles from './AppBackground.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../services/store';

const AppBackground = () => {
  const hoverActive = useSelector((state: RootState) => state.hover.isHovered);
  const modalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const isHovered = hoverActive || modalOpen;

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.figures} ${isHovered ? styles.gray : ''}`}>
        <div className={styles['blue-square']} />
        <div className={styles.triangle} />
        <div className={styles['rectangle-large']} />
        <div className={styles['circle-red']} />
        <div className={styles['rectangle-small']} />
        <div className={styles['circle-yellow']} />
        <div className={styles['black-square']} />
      </div>
    </div>
  );
};

export default AppBackground;