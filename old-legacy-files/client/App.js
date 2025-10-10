// Import core routing components from React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all screen-level views (pages)
import Home from './screens/Home';                   // Landing screen
import Send from './screens/Send';                   // Send money flow
import Receive from './screens/Receive';             // Receive money flow
import Dashboard from './screens/Dashboard';         // User dashboard with recent activity
import ParentalControls from './screens/ParentalControls'; // Spend limits and approval settings
import Login from './screens/Login';                 // Authentication screen
import UserProfile from './screens/UserProfile';     // Displays user info like name, email, role
import ErrorPage from './screens/ErrorPage';         // Fallback for undefined routes
import AdminPanel from './screens/AdminPanel';       // Admin-only tools and user management
import Notifications from './screens/Notifications'; // Alerts, messages, and system updates
import Settings from './screens/Settings';           // User preferences and account settings
import Reports from './screens/Reports';             // Transaction summaries and analytics

// Import shared components
import NavBar from './components/NavBar';            // Top navigation bar
import ThemeToggle from './components/ThemeToggle';  // Light/dark mode switch

// Main application component
export default function App() {
  return (
    // Wrap the app in a Router to enable navigation
    <Router>
      {/* Persistent navigation bar across all pages */}
      <NavBar />

      {/* Define all route paths and their corresponding screens */}
      <Routes>
        {/* Core user flows */}
        <Route path="/" element={<Home />} />             // Home screen
        <Route path="/send" element={<Send />} />         // Send money
        <Route path="/receive" element={<Receive />} />   // Receive money
        <Route path="/dashboard" element={<Dashboard />} /> // Main dashboard

        {/* User settings and controls */}
        <Route path="/controls" element={<ParentalControls />} /> // Parental controls
        <Route path="/login" element={<Login />} />               // Login screen
        <Route path="/profile" element={<UserProfile />} />       // User profile
        <Route path="/theme" element={<ThemeToggle />} />         // Theme toggle
        <Route path="/notifications" element={<Notifications />} /> // Notifications
        <Route path="/settings" element={<Settings />} />         // Account settings

        {/* Admin and reporting tools */}
        <Route path="/admin" element={<AdminPanel />} />          // Admin dashboard
        <Route path="/reports" element={<Reports />} />           // Transaction reports

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<ErrorPage />} />                // 404 fallback
      </Routes>
    </Router>
  );
}
