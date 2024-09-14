const hamburger = document.getElementById('menu-toggle');
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('cross');
  });

function toggleDropdown() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}