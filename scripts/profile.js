// scripts/profile.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profileForm");

  // Load profile data
  fetchUserProfile()
    .then(data => {
      form.name.value = data.name || "";
      form.email.value = data.email || "";
      form.username.value = data.username || "";
      form.kyc.value = data.kycStatus || "Unverified";

      // Optional: load linked accounts if dynamic
      // loadLinkedAccounts(data.linkedAccounts);
    })
    .catch(() => showToast("Failed to load profile", "error"));

  // Save changes
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const updatedData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
    };

    updateUserProfile(updatedData)
      .then(() => showToast("Profile updated successfully", "success"))
      .catch(() => showToast("Failed to update profile", "error"));
  });
});

// Optional: dynamic linked account rendering
function loadLinkedAccounts(accounts = []) {
  const list = document.getElementById("linkedList");
  list.innerHTML = "";

  if (accounts.length === 0) {
    list.innerHTML = "<li>No linked accounts</li>";
    return;
  }

  accounts.forEach(acc => {
    const item = document.createElement("li");
    item.textContent = `🔗 ${acc.provider} - ${acc.masked}`;
    list.appendChild(item);
  });
}
