// client/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}
