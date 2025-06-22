import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
// import type { LoginProps } from './type';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить валидацию, сохранение данных и т.д.
    navigate('/account');
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className={styles.input} required />
        <input type="password" placeholder="Password" className={styles.input} required />
        <button type="submit" className={styles.button}>Sign In</button>
      </form>
    </div>
  );
};

export default Login;