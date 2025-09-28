// client/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Send from './screens/Send';
import Receive from './screens/Receive';
import Dashboard from './screens/Dashboard';
import ParentalControls from './screens/ParentalControls';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/controls" element={<ParentalControls />} />
      </Routes>
    </Router>
  );
}
