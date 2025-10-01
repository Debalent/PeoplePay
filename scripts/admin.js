// scripts/admin.js

document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("peoplepay_role");

  // Gate access
  if (role !== "admin") {
    showToast("Access denied: Admins only", "error");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
    return;
  }

  // Load metrics
  fetchAdminMetrics()
    .then(data => {
      document.getElementById("metric-users").textContent = data.totalUsers || "—";
      document.getElementById("metric-volume").textContent = `$${data.totalVolume?.toFixed(2) || "—"}`;
      document.getElementById("metric-growth").textContent = `${data.growthRate || "—"}%`;
    })
    .catch(() => showToast("Failed to load metrics", "error"));
});
