// components/toast.js

function showToast(message, type = "info", duration = 3000) {
  const toastRoot = document.getElementById("toast");
  if (!toastRoot) return;

  const toastEl = document.createElement('div');
  const bg = (type === 'success') ? 'bg-green-500' : (type === 'error') ? 'bg-red-500' : (type === 'warning') ? 'bg-yellow-500' : 'bg-gray-800';
  toastEl.className = `${bg} text-white px-4 py-2 rounded shadow mb-2 max-w-md`;
  toastEl.setAttribute('role', 'status');
  toastEl.setAttribute('aria-live', 'polite');
  toastEl.textContent = message;

  toastRoot.appendChild(toastEl);

  setTimeout(() => { try { toastEl.remove(); } catch (e) {} }, duration);
}
