import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2 } from 'lucide-react';

import styles from './Cart.module.css';
import { removeFromCart } from '../../slices/cartSlice';
import { openModal } from '../../slices/modalSlice';
import type { RootState } from '../../services/store';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handlePay = () => {
    dispatch(openModal({
      type: 'pay',
      data: {
        items: cartItems,
        total,
      },
    }));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Cart is empty</p>
      ) : (
        <>
          <ul className={styles.list}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <span className={styles.name}>{item.name}</span>
                <span className={styles.price}>{item.price} ₽</span>
                <button
                  className={styles.delete}
                  onClick={() => handleRemove(item.id)}
                  title="Удалить"
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <div className={styles.total}>
              Total: {total.toFixed(2)} ₽
            </div>
            <button className={styles.pay} onClick={handlePay}>
              Оплатить
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;