// script.js — minimal menu control
document.addEventListener('DOMContentLoaded', () => {
  const sideMenu = document.getElementById('sideMenu');

  function openMenu() {
    if (!sideMenu) return;
    sideMenu.style.transform = 'translateX(-16rem)';
  }

  function closeMenu() {
    if (!sideMenu) return;
    sideMenu.style.transform = 'translateX(0)';
  }

  // expose to global so inline onclick handlers work
  window.openMenu = openMenu;
  window.closeMenu = closeMenu;
});
