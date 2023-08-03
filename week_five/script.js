document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    let currentPosition = 0;
    const imageWidth = images[0].clientWidth;
    const interval = 20000; // 20 seconds
  
    // Function to move the slider to the next position
    function slideRight() {
      currentPosition = (currentPosition + imageWidth) % (imageWidth * images.length);
      slider.style.transform = `translateX(-${currentPosition}px)`;
    }
  
    // Function to start the slider animation
    function startSlider() {
      slideRight();
      setInterval(slideRight, interval);
    }
  
    startSlider();
  });
  