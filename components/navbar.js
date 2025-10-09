document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const currentPage = window.location.pathname.split("/").pop();

  // Simulated role (replace with real auth logic later)
  const userRole = localStorage.getItem("peoplepay_role") || "user"; // 'admin', 'user', 'guest'

  const links = [
    { label: "Dashboard", href: "dashboard.html", roles: ["admin", "user"] },
    { label: "Send", href: "send.html", roles: ["admin", "user"] },
    { label: "Request", href: "request.html", roles: ["admin", "user"] },
    { label: "Transactions", href: "transactions.html", roles: ["admin", "user"] },
    { label: "Profile", href: "profile.html", roles: ["admin", "user"] },
    { label: "Admin Panel", href: "admin.html", roles: ["admin"] },
  ];

  const navItems = links.filter(link => link.roles.includes(userRole));

  const navList = navItems.map(link => {
    const activeClass = currentPage === link.href ? 'text-blue-600' : 'text-gray-700';
    return `\n      <li class="mr-4 inline-block">\n        <a class="${activeClass} hover:text-blue-600" href="${link.href}">${link.label}</a>\n      </li>`;
  }).join('');

  // Compute asset base path so images load whether the page is in root or under /pages/
  const assetBase = (function(){
    // If current path contains '/pages/' then logos should be referenced with '../assets'
    return window.location.pathname.includes('/pages/') ? '../assets' : '/assets';
  })();

  navbar.innerHTML = `
    <div class="bg-white border-b">
      <div class="pp-container">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center">
            <a href="dashboard.html" class="flex items-center gap-3">
              <img src="${assetBase}/PeoplePayLogo.jpg" alt="PeoplePay" class="brand-mark" onerror="this.style.display='none'" />
              <svg class="brand-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false" style="display:inline-block">
                <rect width="48" height="48" rx="8" fill="#2563eb"></rect>
                <text x="50%" y="54%" text-anchor="middle" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="18">PP</text>
              </svg>
              <span class="font-semibold text-lg">PeoplePay</span>
            </a>
            <nav class="ml-8" aria-label="Primary">
              <ul class="flex items-center gap-6">${navList}</ul>
            </nav>
          </div>

          <div class="flex items-center">
            <button class="mr-3 p-2 rounded-md hover:bg-gray-100" onclick="openNotifications()" aria-label="Notifications">🔔</button>

            <!-- Explore dropdown with simple JS carousel -->
            <div class="relative mr-3">
              <button id="exploreBtn" class="px-3 py-2 border rounded-md text-sm bg-white">Explore ▾</button>
              <div id="exploreDropdown" class="hidden absolute right-0 mt-2 w-80 bg-white border rounded-md shadow-lg p-3 z-50">
                <div class="carousel" data-current="0">
                  <div class="carousel-track">
                    <div class="carousel-item">
                      <img src="${assetBase}/PeoplePayLogo.jpg" class="w-full h-36 object-cover rounded-md" alt="Send Money">
                      <h4 class="mt-2 font-semibold">Send Money</h4>
                      <p class="text-sm text-gray-600">Quickly send money to friends and family.</p>
                      <a href="send.html" class="inline-block mt-2 primary-btn text-sm">Open</a>
                    </div>
                    <div class="carousel-item hidden">
                      <img src="${assetBase}/PeoplePayLogo.jpg" class="w-full h-36 object-cover rounded-md" alt="Request Payment">
                      <h4 class="mt-2 font-semibold">Request Payment</h4>
                      <p class="text-sm text-gray-600">Create and share payment requests.</p>
                      <a href="request.html" class="inline-block mt-2 primary-btn text-sm">Open</a>
                    </div>
                    <div class="carousel-item hidden">
                      <img src="${assetBase}/PeoplePayLogo.jpg" class="w-full h-36 object-cover rounded-md" alt="Transactions">
                      <h4 class="mt-2 font-semibold">Transactions</h4>
                      <p class="text-sm text-gray-600">Review recent activity and exports.</p>
                      <a href="transactions.html" class="inline-block mt-2 primary-btn text-sm">Open</a>
                    </div>
                  </div>
                  <div class="flex justify-between mt-3">
                    <button class="prev text-sm text-gray-600">◀ Prev</button>
                    <button class="next text-sm text-gray-600">Next ▶</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <button id="userBtn" class="primary-btn text-sm">Account ▾</button>
              <div id="userDropdown" class="hidden absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg p-2 z-50">
                <a class="block px-2 py-1 text-sm hover:bg-gray-100 rounded" href="profile.html">Profile</a>
                <button class="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded" onclick="logout()">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Toggle explore dropdown
  const exploreBtn = document.getElementById('exploreBtn');
  const exploreDropdown = document.getElementById('exploreDropdown');
  if (exploreBtn && exploreDropdown) {
    exploreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      exploreDropdown.classList.toggle('hidden');
    });

    // Carousel behavior
    const track = exploreDropdown.querySelector('.carousel-track');
    const items = Array.from(track.querySelectorAll('.carousel-item'));
    let idx = 0;
    function showIndex(i) {
      items.forEach((el, j) => {
        el.classList.toggle('hidden', j !== i);
      });
    }
    const prev = exploreDropdown.querySelector('.prev');
    const next = exploreDropdown.querySelector('.next');
    prev.addEventListener('click', (ev) => { ev.stopPropagation(); idx = (idx - 1 + items.length) % items.length; showIndex(idx); });
    next.addEventListener('click', (ev) => { ev.stopPropagation(); idx = (idx + 1) % items.length; showIndex(idx); });
    showIndex(0);
  }

  // Toggle user dropdown
  const userBtn = document.getElementById('userBtn');
  const userDropdown = document.getElementById('userDropdown');
  if (userBtn && userDropdown) {
    userBtn.addEventListener('click', (e) => { e.stopPropagation(); userDropdown.classList.toggle('hidden'); });
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    const ed = document.getElementById('exploreDropdown'); if (ed && !ed.classList.contains('hidden')) ed.classList.add('hidden');
    const ud = document.getElementById('userDropdown'); if (ud && !ud.classList.contains('hidden')) ud.classList.add('hidden');
  });

  // Prevent dropdown from closing when interacting with the carousel
  // (no leftover bootstrap dropdown handlers required for Tailwind implementation)
});

function logout() {
  localStorage.removeItem("peoplepay_token");
  localStorage.removeItem("peoplepay_role");
  window.location.href = "login.html";
}

function openNotifications() {
  showToast('No new notifications', 'info', 2000);
}
