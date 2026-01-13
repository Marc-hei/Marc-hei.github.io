// DOM ELEMENTS
const hamburger = document.getElementById('menu-toggle');
const imageContainer = document.getElementById('images');
const dropdownContent = document.querySelector('.dropdown-content');
const allImages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];


// FUNCTIONS
function toggleDropdown() {
  if (dropdownContent.classList.contains('show')) {
    dropdownContent.classList.remove('show');
  } else {
    dropdownContent.classList.add('show');
  }
}



function showImages() {
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
    imageElement.classList.add("image")
    imageContainer.appendChild(imageElement);
  });
}



showImages();

// EVENT LISTENERS
hamburger.addEventListener('click', () => {hamburger.classList.toggle('cross'); toggleDropdown();});