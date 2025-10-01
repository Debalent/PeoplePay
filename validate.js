// scripts/validate.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sendForm");
  const modal = document.getElementById("confirmModal");
  const confirmText = document.getElementById("confirmText");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const recipient = form.recipient.value.trim();
    const amount = parseFloat(form.amount.value);
    const note = form.note.value.trim();

    // Basic validation
    if (!recipient.startsWith("@") || recipient.length < 3) {
      showToast("Invalid recipient username", "error");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      showToast("Enter a valid amount", "error");
      return;
    }

    // Format preview
    confirmText.innerHTML = `
      You’re about to send <strong>$${amount.toFixed(2)}</strong> to <strong>${recipient}</strong>.
      ${note ? `<br/>Note: "${note}"` : ""}
    `;

    openModal(modal);
  });
});

// Called from modal.js
function confirmSend() {
  const form = document.getElementById("sendForm");
  const data = {
    recipient: form.recipient.value.trim(),
    amount: parseFloat(form.amount.value),
    note: form.note.value.trim(),
  };

  // Disable button to prevent double submission
  document.querySelector("#confirmModal .primary-btn").disabled = true;

  sendTransaction(data)
    .then(() => {
      showToast("Payment sent successfully!", "success");
      form.reset();
      closeModal();
    })
    .catch(() => {
      showToast("Failed to send payment", "error");
      closeModal();
    })
    .finally(() => {
      document.querySelector("#confirmModal .primary-btn").disabled = false;
    });
}
