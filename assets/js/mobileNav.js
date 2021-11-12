const burger = document.getElementById('sidebarToogle');
const sidebar = document.getElementById('Sidebar');

burger.addEventListener('click', event => {
  document.body.classList.toggle('show-sidebar');
});