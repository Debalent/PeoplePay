// components/theme.js
// Small runtime theming helper. Reads window.PP_UI and applies CSS variables
// so components can be branded without rebuilding CSS.

(function(){
  function applyColors(colors){
    if (!colors) return;
    const root = document.documentElement.style;
    if (colors.primary) root.setProperty('--pp-primary', colors.primary);
    if (colors.primary600) root.setProperty('--pp-primary-600', colors.primary600);
    if (colors.accent) root.setProperty('--pp-accent', colors.accent);
    if (colors.muted) root.setProperty('--pp-muted', colors.muted);
    if (colors.bg) root.setProperty('--pp-bg', colors.bg);
    if (colors.surface) root.setProperty('--pp-surface', colors.surface);
    if (colors.h1) root.setProperty('--pp-h1', colors.h1);
    if (colors.h2) root.setProperty('--pp-h2', colors.h2);
  }

  function init(){
    // If the user already set window.PP_UI before this script loads, apply it.
    if (window.PP_UI && window.PP_UI.colors) applyColors(window.PP_UI.colors);

    // Expose a setter so other scripts or dev console can update theme at runtime
    window.PP_UI_APPLY = function(pp){
      if (!pp) return;
      if (pp.colors) applyColors(pp.colors);
      if (pp.logo) {
        // make logo available globally for components
        window.PP_UI_LOGO = pp.logo;
      }
    };
  }

  // Defer until DOM available but run early
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
