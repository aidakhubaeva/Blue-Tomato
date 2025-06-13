import styles from './App.module.css';
import AppHeader from '../components/app-header';
import AppBackground from '../components/app-background';
import ProductCard from '../components/product-card';

function App() {
  const handleCardClick = (id: number) => {
    console.log(`Card clicked: ${id}`);
  };

  return (
    <div className={styles.app}>
      <AppBackground />
      <AppHeader />
      <ProductCard onClick={handleCardClick} />
    </div>
  );
}

export default App;