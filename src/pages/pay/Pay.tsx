import React from 'react';
import styles from './Pay.module.css';
import type { PayProps } from './type';

const Pay: React.FC<PayProps> = ({ items, total }) => {
  return (
    <div>
      <h2 className={styles.title}>Оплата</h2>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <span>{item.name}</span>
            <span>{item.price} ₽</span>
          </li>
        ))}
      </ul>

      <div className={styles.total}>К оплате: {total.toFixed(2)} ₽</div>
      <button className={styles.button}>Перейти к оплате</button>
    </div>
  );
};

export default Pay;