// DOM ELEMENTS
const hamburger = document.getElementById('menu-toggle');
const boxes = document.querySelectorAll('.scale-box');
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

function scaleOnScroll() {
  if (window.innerWidth < 768) {
    boxes.forEach(box => {box.style.transform = `scale(1)`;})
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


function updateHobbiesSection() {
  if (!imageContainer) {
    return;
  }
  imageContainer.innerHTML = "";
  const shuffled = allImages.sort(() => 0.5 - Math.random());
  const selectedImages = shuffled.slice(0, 3);
  selectedImages.forEach(img => {
    const imageElement = document.createElement("img");
    imageElement.src = `pics/hobbies/${img}.jpg`;
    imageElement.alt = "Hobby photo";
    imageElement.classList.add("hobbies-image")
    imageContainer.appendChild(imageElement);
  });
}

updateHobbiesSection();
setInterval(updateHobbiesSection, 60 * 60 * 1000);



// EVENT LISTENERS
hamburger.addEventListener('click', () => {hamburger.classList.toggle('cross'); toggleDropdown();});
window.addEventListener('scroll', scaleOnScroll);
window.addEventListener('resize', scaleOnScroll);
window.addEventListener('load', scaleOnScroll);