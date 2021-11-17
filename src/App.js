import './sass/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      <Home />
    </div>
  );
}

export default App;
