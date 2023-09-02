import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
