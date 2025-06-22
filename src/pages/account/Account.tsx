import styles from './Account.module.css';

const Account = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Welcome to your account!</h2>
      <p className={styles.subtitle}>Here you can manage your profile and settings.</p>
    </div>
  );
};

export default Account;