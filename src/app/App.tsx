import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.css';

import AppHeader from '../components/app-header/AppHeader';
import AppBackground from '../components/app-background/AppBackground';
import ProductCard from '../components/product-card/ProductCard';
import Modal from '../components/modal/Modal';
import ProductDetails from '../components/product-details/ProductDetails';
import Cart from '../components/cart';
import Register from '../pages/register';
import Login from '../pages/login';
import Account from '../pages/account';
import Pay from '../pages/pay';
import RegisterVerify from '../components/register-verify';

import { openModal, closeModal } from '../slices/modalSlice';

import type { RootState } from '../services/store';
import data from '../products.json';

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const type = useSelector((state: RootState) => state.modal.type);
  const modalData = useSelector((state: RootState) => state.modal.data);


  const handleCardClick = (id: number) => {
    dispatch(openModal({ type: 'product', data: id }));
  };

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const selectedProduct = data.find((item) => item.id === modalData);

  return (
    <Router>
      <div className={styles.app}>
        <AppBackground />
        <AppHeader />

        <Routes>
          <Route path="/" element={<ProductCard onClick={handleCardClick} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>

        {isOpen && type === 'product' && selectedProduct && (
          <Modal onClose={handleModalClose}>
            <ProductDetails
              name={selectedProduct.name}
              image={selectedProduct.image}
              description={selectedProduct.description}
              price={selectedProduct.price}
            />
          </Modal>
        )}

        {isOpen && type === 'pay' && (
          <Modal onClose={handleModalClose}>
            <Pay items={modalData.items} total={modalData.total} />
          </Modal>
        )}

        {isOpen && type === 'registerVerify' && (
          <Modal onClose={handleModalClose}>
            <RegisterVerify email={modalData.email} />
          </Modal>
        )}
      </div>
    </Router>
  );
}

export default App;