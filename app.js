const toggleBtn = document.getElementById('nav-toggle');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});
