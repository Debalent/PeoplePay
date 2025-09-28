// client/utils/formatCurrency.js

export default function formatCurrency(amount) {
  if (isNaN(amount)) return '$0.00';
  return `$${Number(amount).toFixed(2)}`;
}
