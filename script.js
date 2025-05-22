const images = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg",
    "image/6.jpg",
    "image/7.jpg",
    "image/8.jpg",
    "image/9.jpg",
    "image/10.jpg",
];

let currentIndex = 0;
const panel = document.getElementById('leftPanel');

function changeImage() {
    panel.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeImage(); // Affiche la première image
setInterval(changeImage, 3000); // Change toutes les 3 secondes
  