document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;
    let interval;
  
    const showImage = (index) => {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    };
  
    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    };
  
    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    };
  
    nextButton.addEventListener('click', () => {
      nextImage();
      resetInterval();
    });
  
    prevButton.addEventListener('click', () => {
      prevImage();
      resetInterval();
    });
  
    const startInterval = () => {
      interval = setInterval(nextImage, 3000);
    };
  
    const resetInterval = () => {
      clearInterval(interval);
      startInterval();
    };
  
    startInterval();
  });