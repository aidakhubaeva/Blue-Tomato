import type { FC, ReactNode } from 'react';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../slices/modalSlice';
import type { TModalUIProps } from './type';

const Modal: FC<TModalUIProps> = ({ onClose, children }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
    dispatch(closeModal());
  };

  return (
    <>
      <div className={styles.overlay} onClick={handleClose} />
      <div className={styles.modal}>
        <button className={styles.button} onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;