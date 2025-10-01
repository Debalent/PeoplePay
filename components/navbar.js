document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const currentPage = window.location.pathname.split("/").pop();

  // Simulated role (replace with real auth logic later)
  const userRole = localStorage.getItem("peoplepay_role") || "user"; // 'admin', 'user', 'guest'

  const links = [
    { label: "Dashboard", href: "dashboard.html", roles: ["admin", "user"] },
    { label: "Send", href: "send.html", roles: ["admin", "user"] },
    { label: "Request", href: "request.html", roles: ["admin", "user"] },
    { label: "Transactions", href: "transactions.html", roles: ["admin", "user"] },
    { label: "Profile", href: "profile.html", roles: ["admin", "user"] },
    { label: "Admin Panel", href: "admin.html", roles: ["admin"] }, // hidden from regular users
  ];

  const navLinks = links
    .filter(link => link.roles.includes(userRole))
    .map(link => {
      const isActive = currentPage === link.href ? "active" : "";
      return `<li><a href="${link.href}" class="${isActive}">${link.label}</a></li>`;
    })
    .join("");

  navbar.innerHTML = `
    <div class="navbar-container" role="navigation" aria-label="Main navigation">
      <a href="dashboard.html" class="logo-link">
        <img src="/assets/logo.jpg" alt="PeoplePay logo" class="logo" />
      </a>
      <ul class="nav-links">${navLinks}</ul>
      <button class="logout-btn" onclick="logout()" aria-label="Log out">Logout</button>
    </div>
  `;
});

function logout() {
  localStorage.removeItem("peoplepay_token");
  localStorage.removeItem("peoplepay_role");
  window.location.href = "login.html";
}
function logout() {
  localStorage.removeItem("peoplepay_token");
  localStorage.removeItem("peoplepay_role");
  window.location.href = "login.html";
}
