// scripts/transactions.js

let currentPage = 1;
const pageSize = 10;

document.addEventListener("DOMContentLoaded", () => {
  applyFilters(); // Load initial data

  document.getElementById("searchInput").addEventListener("input", debounce(applyFilters, 300));
  document.getElementById("typeFilter").addEventListener("change", applyFilters);
  document.getElementById("statusFilter").addEventListener("change", applyFilters);
  document.getElementById("dateFilter").addEventListener("change", applyFilters);
});

function applyFilters() {
  const search = document.getElementById("searchInput").value.trim();
  const type = document.getElementById("typeFilter").value;
  const status = document.getElementById("statusFilter").value;
  const date = document.getElementById("dateFilter").value;

  fetchTransactions({ search, type, status, date, page: currentPage, pageSize })
    .then(renderTransactions)
    .catch(() => showToast("Failed to load transactions", "error"));
}

function renderTransactions(data) {
  const list = document.getElementById("transactionList").querySelector(".transaction-items");
  list.innerHTML = "";

  if (!data || data.length === 0) {
    list.innerHTML = `<li>No transactions found</li>`;
    return;
  }

  data.forEach(tx => {
    const item = document.createElement("li");
    item.className = "transaction-item";
    item.innerHTML = `
      <div class="tx-row">
        <span class="tx-type ${tx.type}">${tx.type.toUpperCase()}</span>
        <span class="tx-amount">$${tx.amount.toFixed(2)}</span>
      </div>
      <div class="tx-meta">
        <span class="tx-recipient">@${tx.recipient}</span>
        <span class="tx-status ${tx.status}">${tx.status}</span>
        <span class="tx-date">${new Date(tx.date).toLocaleDateString()}</span>
      </div>
      ${tx.note ? `<div class="tx-note">📝 ${tx.note}</div>` : ""}
    `;
    list.appendChild(item);
  });

  document.getElementById("pageIndicator").textContent = `Page ${currentPage}`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    applyFilters();
  }
}

function nextPage() {
  currentPage++;
  applyFilters();
}

// Utility: debounce input
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
