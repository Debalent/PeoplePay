// client/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Send from './screens/Send';
import Receive from './screens/Receive';
import Dashboard from './screens/Dashboard';
import ParentalControls from './screens/ParentalControls';
import Login from './screens/Login';
import UserProfile from './screens/UserProfile';
import ErrorPage from './screens/ErrorPage';
import ThemeToggle from './components/ThemeToggle';
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
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/theme" element={<ThemeToggle />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
