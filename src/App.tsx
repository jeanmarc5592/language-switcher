import { Routes, Route } from 'react-router';
import styles from './App.module.css';
import { HomePage, SubPage } from './pages';

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:locale" element={<SubPage />} />
      </Routes>
    </div>
  );
}

export default App;
