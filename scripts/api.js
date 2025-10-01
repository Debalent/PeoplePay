// scripts/api.js

const API_BASE = "https://api.peoplepay.io"; // Replace with your actual backend URL

// Generic fetch wrapper
async function apiRequest(endpoint, method = "GET", body = null) {
  const token = localStorage.getItem("peoplepay_token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const config = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, config);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error("API request failed:", err);
    throw err;
  }
}

// Send money transaction
async function sendTransaction({ recipient, amount, note }) {
  return await apiRequest("/transactions/send", "POST", {
    recipient,
    amount,
    note,
  });
}

// Fetch user balance
async function fetchBalance() {
  return await apiRequest("/users/balance");
}

// Fetch recent activity
async function fetchActivity() {
  return await apiRequest("/users/activity");
}

// Future expansion: link bank, verify KYC, etc.
export {
  sendTransaction,
  fetchBalance,
  fetchActivity,
  apiRequest,
};
