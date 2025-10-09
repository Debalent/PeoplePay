// components/footer.js

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="bg-white border-t mt-8">
      <div class="pp-container py-4 flex items-center justify-between">
        <p class="text-sm text-gray-600 mb-0">&copy; ${new Date().getFullYear()} PeoplePay. All rights reserved.</p>
        <div class="space-x-4">
          <a class="text-sm text-gray-600 hover:text-blue-600" href="terms.html">Terms</a>
          <a class="text-sm text-gray-600 hover:text-blue-600" href="privacy.html">Privacy</a>
          <a class="text-sm text-gray-600 hover:text-blue-600" href="contact.html">Contact</a>
        </div>
        <small class="text-xs text-gray-400">v1.0.0</small>
      </div>
    </footer>
  `;
});
