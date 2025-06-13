import React from 'react';
import styles from './ProductCard.module.css';
import data from '../../products.json';
import { useDispatch } from 'react-redux';
import { setHoverTrue, setHoverFalse } from '../../slices/hoverSlice';

const ProductCard: React.FC<{ onClick: (id: number) => void }> = ({ onClick }) => {
  const dispatch = useDispatch();

  return (
    <main className={styles.main}>
      {data.map((item) => (
        <div
          key={item.id}
          className={styles.card}
          onClick={() => onClick(item.id)}
          onMouseEnter={() => dispatch(setHoverTrue())}
          onMouseLeave={() => dispatch(setHoverFalse())}
        >
          <div className={styles.cardNumber}>{item.id}</div>
          <h3 className={styles.title}>{item.name}</h3>
          <img src={item.image} alt={item.name} className={styles.cardImage} />
        </div>
      ))}
    </main>
  );
};

export default ProductCard;