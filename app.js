const toggleBtn = document.getElementById('nav-toggle');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

// Remove mobile nav dynamically at 678px w/o btn
window.addEventListener('resize', () => {
  const width = `687`;

  if (window.innerWidth > width) {
    sidebar.classList.remove('show-sidebar');
  }
});
