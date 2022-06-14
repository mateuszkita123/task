import './App.css';
import { Hero } from './components/jumbotron/Hero';
import { Footer } from './components/partials/Footer';
import { Navbar } from './components/partials/Navbar';
import { MainContent } from './components/main/MainContent';
import { Table } from './components/table/Table';
import styles from './styles/Styles.module.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <div className={styles.flex}>
        <Hero />
        <Table />
      </div>
      <Footer />
    </div>
  );
}

export default App;
