import logo from './logo.svg';
import './theme/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/wwwin" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
