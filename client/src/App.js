import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Locations from './pages/Locations';
import Assest from './pages/Assest';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/assest' element={<Assest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
