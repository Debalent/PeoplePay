// components/toast.js

function ensureToastRoot() {
  let root = document.getElementById('pp-toasts');
  if (root) return root;
  root = document.createElement('div');
  root.id = 'pp-toasts';
  // fixed position bottom-right container
  root.style.position = 'fixed';
  root.style.right = '1rem';
  root.style.bottom = '1rem';
  root.style.zIndex = '9999';
  root.style.display = 'flex';
  root.style.flexDirection = 'column';
  root.style.gap = '0.5rem';
  document.body.appendChild(root);
  return root;
}

function showToast(message, type = 'info', duration = 3000) {
  const toastRoot = ensureToastRoot();

  const toastEl = document.createElement('div');
  const bg = (type === 'success') ? '#10b981' : (type === 'error') ? '#ef4444' : (type === 'warning') ? '#f59e0b' : '#111827';
  toastEl.style.background = bg;
  toastEl.style.color = '#fff';
  toastEl.style.padding = '0.5rem 0.75rem';
  toastEl.style.borderRadius = '0.375rem';
  toastEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
  toastEl.style.maxWidth = '320px';
  toastEl.style.display = 'flex';
  toastEl.style.alignItems = 'center';
  toastEl.style.justifyContent = 'space-between';

  const text = document.createElement('div');
  text.style.marginRight = '0.5rem';
  text.textContent = message;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.style.background = 'transparent';
  closeBtn.style.border = 'none';
  closeBtn.style.color = '#fff';
  closeBtn.style.fontSize = '1.1rem';
  closeBtn.style.cursor = 'pointer';

  closeBtn.addEventListener('click', () => {
    try { toastEl.remove(); } catch (e) {}
  });

  toastEl.appendChild(text);
  toastEl.appendChild(closeBtn);
  toastRoot.appendChild(toastEl);

  setTimeout(() => { try { toastEl.remove(); } catch (e) {} }, duration);
}
