document.addEventListener('DOMContentLoaded', () => {
  const sideMenu = document.querySelector('#sideMenu');
  const navBar = document.querySelector('nav');

  function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
  }

  function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';

  }

});


  