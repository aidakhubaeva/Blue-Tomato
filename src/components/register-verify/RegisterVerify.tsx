import { useEffect, useState } from 'react';
import type { FC } from 'react';
import styles from './RegisterVerify.module.css';
import type { RegisterVerifyProps } from './type';

const RegisterVerify: FC<RegisterVerifyProps> = ({ email }) => {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(60);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Code submitted: ${code}`);
  };

  return (
    <form className={styles.modal} onSubmit={handleVerify}>
      <p>A verification code was sent to <b>{email}</b></p>
      <input
        className={styles.input}
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter the code"
        required
      />
      <button className={styles.button} type="submit">Verify</button>
      <div className={styles.timer}>
        <p>{timer > 0 ? `Time left: ${timer} sec` : 'Time expired'}</p>
      </div>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegisterVerify;