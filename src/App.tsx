import styles from './App.module.css';
import { LanguageList } from './components';

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Welche Sprache sprichst du?</h1>
      <LanguageList />
    </div>
  );
}

export default App;
