// scripts/api.js

const API_BASE = "https://api.peoplepay.io"; // Replace with your actual backend URL

// Generic fetch wrapper
async function apiRequest(endpoint, method = "GET", body = null) {
  const token = localStorage.getItem("peoplepay_token");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const config = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, config);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }
    return await response.json();
  } catch (err) {
    console.error("API request failed:", err);
    throw err;
  }
}

//
// 🔹 Transactions
//
async function sendTransaction({ recipient, amount, note }) {
  return await apiRequest("/transactions/send", "POST", { recipient, amount, note });
}

async function fetchTransactions({ search, type, status, date, page, pageSize }) {
  const params = new URLSearchParams({ search, type, status, date, page, pageSize });
  return await apiRequest(`/transactions?${params.toString()}`);
}

//
// 🔹 Balance & Activity
//
async function fetchBalance() {
  return await apiRequest("/users/balance");
}

async function fetchActivity() {
  return await apiRequest("/users/activity");
}

//
// 🔹 Requests
//
async function logPaymentRequest({ amount, note }) {
  return await apiRequest("/requests/create", "POST", { amount, note });
}

//
// 🔹 Profile
//
async function fetchUserProfile() {
  return await apiRequest("/users/profile");
}

async function updateUserProfile(data) {
  return await apiRequest("/users/profile", "PUT", data);
}

//
// 🔹 Admin (future expansion)
//
async function fetchAdminMetrics() {
  return await apiRequest("/admin/metrics");
}

//
// 🔹 Export functions
//
export {
  apiRequest,
  sendTransaction,
  fetchTransactions,
  fetchBalance,
  fetchActivity,
  logPaymentRequest,
  fetchUserProfile,
  updateUserProfile,
  fetchAdminMetrics,
};
