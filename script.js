let currentImgIndex = 0;
let visibleImages = [];

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function updateVisibleImages() {
  visibleImages = Array.from(document.querySelectorAll('.gallery .image'))
    .filter(image => image.style.display !== 'none')
    .map(image => image.querySelector('img'));
}

function openLightbox(img) {
  updateVisibleImages();
  currentImgIndex = visibleImages.indexOf(img);
  lightbox.style.display = 'flex';
  lightboxImg.src = img.src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentImgIndex = (currentImgIndex + direction + visibleImages.length) % visibleImages.length;
  lightboxImg.src = visibleImages[currentImgIndex].src;
}

function filterGallery(category) {
  const allContainers = document.querySelectorAll('.gallery .image');
  allContainers.forEach(container => {
    if (category === 'all' || container.classList.contains(category)) {
      container.style.display = 'block';
    } else {
      container.style.display = 'none';
    }
  });

  updateVisibleImages(); // Update visible images after filtering
}




