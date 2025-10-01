// scripts/validate-request.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("requestForm");
  const preview = document.getElementById("requestPreview");
  const linkInput = document.getElementById("requestLink");
  const qrCanvas = document.getElementById("qrCanvas");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const amount = parseFloat(form.amount.value);
    const note = form.note.value.trim();

    if (isNaN(amount) || amount <= 0) {
      showToast("Enter a valid amount", "error");
      return;
    }

    // Simulate request link generation
    const username = "@demond"; // Replace with dynamic user ID later
    const requestLink = `https://peoplepay.io/pay?to=${encodeURIComponent(username)}&amount=${amount.toFixed(2)}${note ? `&note=${encodeURIComponent(note)}` : ""}`;

    linkInput.value = requestLink;
    preview.classList.remove("hidden");

    // Generate QR code
    QRCode.toCanvas(qrCanvas, requestLink, { width: 180 }, (error) => {
      if (error) {
        console.error("QR generation failed:", error);
        showToast("Failed to generate QR code", "error");
      }
    });

    showToast("Payment request generated", "success");
  });
});

function copyRequestLink() {
  const linkInput = document.getElementById("requestLink");
  linkInput.select();
  linkInput.setSelectionRange(0, 99999); // For mobile

  navigator.clipboard.writeText(linkInput.value)
    .then(() => showToast("Link copied to clipboard", "success"))
    .catch(() => showToast("Failed to copy link", "error"));
}
