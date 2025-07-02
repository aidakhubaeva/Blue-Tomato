import type { FC } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Register.module.css';
import { openModal } from '../../slices/modalSlice';
import type { RegisterFormData } from './type';

const Register: FC = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: RegisterFormData = { email };
    console.log(data);
    dispatch(openModal({ type: 'registerVerify', data }));
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
    <div className={styles.container}>
        <p className={styles.instruction}>
        You will receive an email with a verification code. The email is not saved at this stage.
        </p>
        <input
        type="email"
        className={styles.input}
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <button className={styles.button} type="submit">
        Send Code
        </button>
    </div>
    </form>
  );
};

export default Register;