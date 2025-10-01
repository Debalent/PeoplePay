// components/navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const currentPage = window.location.pathname.split("/").pop();

  navbar.innerHTML = `
    <div class="navbar-container">
      <a href="dashboard.html" class="logo">PeoplePay</a>
      <ul class="nav-links">
        <li><a href="dashboard.html" class="${currentPage === 'dashboard.html' ? 'active' : ''}">Dashboard</a></li>
        <li><a href="send.html" class="${currentPage === 'send.html' ? 'active' : ''}">Send</a></li>
        <li><a href="request.html" class="${currentPage === 'request.html' ? 'active' : ''}">Request</a></li>
        <li><a href="transactions.html" class="${currentPage === 'transactions.html' ? 'active' : ''}">Transactions</a></li>
        <li><a href="profile.html" class="${currentPage === 'profile.html' ? 'active' : ''}">Profile</a></li>
      </ul>
      <button class="logout-btn" onclick="logout()">Logout</button>
    </div>
  `;
});

function logout() {
  // Placeholder for session clearing
  localStorage.removeItem("peoplepay_token");
  window.location.href = "login.html";
}
