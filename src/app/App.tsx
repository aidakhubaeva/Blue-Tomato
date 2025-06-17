import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.css';
import AppHeader from '../components/app-header/AppHeader';
import AppBackground from '../components/app-background/AppBackground';
import ProductCard from '../components/product-card/ProductCard';
import Modal from '../components/modal/Modal';
import ProductDetails from '../components/product-details/ProductDetails';
import Cart from '../components/cart';

import type { RootState } from '../services/store';
import { openModal, closeModal } from '../slices/modalSlice';
import data from '../products.json';

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const selectedId = useSelector((state: RootState) => state.modal.selectedId);
  const selectedProduct = data.find((item) => item.id === selectedId);

  const handleCardClick = (id: number) => {
    dispatch(openModal(id));
  };

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  return (
    <Router>
      <div className={styles.app}>
        <AppBackground />
        <AppHeader />

        <Routes>
          <Route path="/" element={<ProductCard onClick={handleCardClick} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {isOpen && selectedProduct && (
          <Modal onClose={handleModalClose}>
            <ProductDetails
              name={selectedProduct.name}
              image={selectedProduct.image}
              description={selectedProduct.description}
              price={selectedProduct.price}
            />
          </Modal>
        )}
      </div>
    </Router>
  );
}

export default App;