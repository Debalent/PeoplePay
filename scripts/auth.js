// scripts/auth.js

const AUTH_API = "https://api.peoplepay.io/auth"; // Replace with your actual auth endpoint

// Login function
async function login(username, password) {
  try {
    const response = await fetch(`${AUTH_API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Login failed");

    const { token, role } = await response.json();

    // Store token and role
    localStorage.setItem("peoplepay_token", token);
    localStorage.setItem("peoplepay_role", role);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } catch (err) {
    showToast("Invalid login credentials", "error");
    console.error("Login error:", err);
  }
}

// Logout function
function logout() {
  localStorage.removeItem("peoplepay_token");
  localStorage.removeItem("peoplepay_role");
  window.location.href = "login.html";
}

// Session check
function validateSession() {
  const token = localStorage.getItem("peoplepay_token");
  if (!token) {
    window.location.href = "login.html";
  }
}

// Role check
function getUserRole() {
  return localStorage.getItem("peoplepay_role") || "guest";
}

// Auto-run session check on protected pages
document.addEventListener("DOMContentLoaded", () => {
  const protectedPages = ["dashboard.html", "send.html", "request.html", "transactions.html", "profile.html"];
  const currentPage = window.location.pathname.split("/").pop();

  if (protectedPages.includes(currentPage)) {
    validateSession();
  }
});
