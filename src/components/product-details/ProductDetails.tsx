import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';
import type { ProductDetailsProps } from './type';
import type { RootState } from '../../services/store';
import styles from './ProductDetails.module.css';

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  image,
  description,
  price,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isInCart = cartItems.some((item) => item.name === name);

  const handleAddToCart = () => {
    if (isInCart) return;
    dispatch(addToCart({ name, image, description, price, id: Date.now() }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img src={image} alt={name} className={styles.cover} />
        <div className={styles.carousel}>
          <div className={styles.thumbnail} />
          <div className={styles.thumbnail} />
          <div className={styles.thumbnail} />
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>{price} ₽</div>
        <div className={styles.buttons}>
          <button
            className={styles.toCart}
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            {isInCart ? 'In Cart' : 'To Cart'}
          </button>
          <button className={styles.pay}>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;