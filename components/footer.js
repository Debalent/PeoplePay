// components/footer.js

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-container" role="contentinfo">
      <p>&copy; ${new Date().getFullYear()} PeoplePay. All rights reserved.</p>
      <ul class="footer-links">
        <li><a href="terms.html">Terms</a></li>
        <li><a href="privacy.html">Privacy</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <span class="version-tag">v1.0.0</span>
    </div>
  `;
});
