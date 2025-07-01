// DOM ELEMENTS
const hamburger = document.getElementById('menu-toggle');
const boxes = document.querySelectorAll('.scale-box');
const dropdownContent = document.querySelector('.dropdown-content');

    


// FUNCTIONS
function toggleDropdown() {
  if (dropdownContent.classList.contains('show')) {
    dropdownContent.classList.remove('show');
  } else {
    dropdownContent.classList.add('show');
  }
}

function scaleOnScroll() {
  if (window.innerWidth < 768) {
    box.style.transform = `scale(1)`;
    return;
  };
  const viewportHeight = window.innerHeight;
  boxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    const distanceFromCenter = Math.abs(viewportHeight / 2 - (rect.top + rect.height / 2));
    const maxDistance = viewportHeight / 2;

    let scale = 1 - (distanceFromCenter / maxDistance) * 0.2;
    scale = Math.max(0.8, Math.min(1, scale));

    box.style.transform = `scale(${scale})`;
  });
}

// EVENT LISTENERS
hamburger.addEventListener('click', () => {hamburger.classList.toggle('cross');});
window.addEventListener('scroll', scaleOnScroll);
window.addEventListener('resize', scaleOnScroll);
window.addEventListener('load', scaleOnScroll);