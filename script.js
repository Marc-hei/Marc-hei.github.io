// DOM ELEMENTS
const hamburger = document.getElementById('menu-toggle');
const boxes = document.querySelectorAll('.fade-box');
const imageContainer = document.getElementById("hobbies-section");
const dropdownContent = document.querySelector('.dropdown-content');
const allImages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];


// FUNCTIONS
function toggleDropdown() {
  if (dropdownContent.classList.contains('show')) {
    dropdownContent.classList.remove('show');
  } else {
    dropdownContent.classList.add('show');
  }
}

function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
}


function updateHobbiesSection() {
  if (!imageContainer) {
    return;
  }
  imageContainer.innerHTML = "";
  const shuffled = allImages.sort(() => 0.5 - Math.random());
  const selectedImages = shuffled.slice(0, 3);
  selectedImages.forEach(img => {
    const imageElement = document.createElement("img");
    imageElement.src = `assets/hobbies/${img}.jpg`;
    imageElement.alt = "Hobby photo";
    imageElement.classList.add("hobbies-image")
    imageContainer.appendChild(imageElement);
  });
}



animateOnScroll()
updateHobbiesSection();
setInterval(updateHobbiesSection, 60 * 60 * 1000);

// EVENT LISTENERS
hamburger.addEventListener('click', () => {hamburger.classList.toggle('cross'); toggleDropdown();});
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);
window.addEventListener('load', animateOnScroll);