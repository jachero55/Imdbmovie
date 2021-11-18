import './sass/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<SingleMovie />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
