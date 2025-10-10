// Import React to define the component
import React from 'react';

// Define the AdminPanel screen component
export default function AdminPanel() {
  // Temporary hardcoded admin info (can be replaced with dynamic data)
  const admin = {
    name: 'Demond Balentine',
    role: 'Admin',
    accessLevel: 'Full',
  };

  // Render the admin dashboard layout
  return (
    <div style={styles.container}>
      <h2>Admin Panel</h2>
      {/* Display basic admin info */}
      <p><strong>Name:</strong> {admin.name}</p>
      <p><strong>Role:</strong> {admin.role}</p>
      <p><strong>Access Level:</strong> {admin.accessLevel}</p>

      {/* Placeholder for future admin tools */}
      <div style={styles.section}>
        <h3>System Tools</h3>
        <ul>
          <li>User Management</li>
          <li>Transaction Oversight</li>
          <li>Audit Logs</li>
        </ul>
      </div>
    </div>
  );
}

// Inline styles for layout and spacing
const styles = {
  container: {
    padding: '2rem',             // Adds spacing around the content
    maxWidth: '600px',           // Limits width for readability
    margin: '0 auto',            // Centers the panel
    backgroundColor: '#f9f9f9',  // Light background for contrast
    borderRadius: '8px',         // Rounded corners
  },
  section: {
    marginTop: '2rem',           // Adds space above the tools section
  },
};
