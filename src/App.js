import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BooksDisplay from './components/BooksDisplay';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksDisplay />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </>

  );
}

export default App;
