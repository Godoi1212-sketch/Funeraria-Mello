document.addEventListener("DOMContentLoaded", function () {
  const slide = document.getElementById("carouselSlide");
  const items = slide.querySelectorAll(".carousel-item");
  let index = 1;
  let size = items[0].clientWidth;

  slide.style.transform = `translateX(-${size * index}px)`;

  function moveToSlide() {
    slide.style.transition = "transform 0.5s ease-in-out";
    slide.style.transform = `translateX(-${size * index}px)`;
  }

  function jumpToSlide(newIndex) {
    slide.style.transition = "none";
    index = newIndex;
    slide.style.transform = `translateX(-${size * index}px)`;
    slide.offsetWidth;
    slide.style.transition = "transform 0.5s ease-in-out";
  }

  function nextSlide() {
    if (index >= items.length - 1) return;
    index++;
    moveToSlide();
  }

  function prevSlide() {
    if (index <= 0) return;
    index--;
    moveToSlide();
  }

  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  document.getElementById("prevBtn").addEventListener("click", prevSlide);

  slide.addEventListener("transitionend", () => {
    if (items[index].id === "lastClone") {
      jumpToSlide(items.length - 2);
    }
    if (items[index].id === "firstClone") {
      jumpToSlide(1);
    }
  });

  window.addEventListener("resize", () => {
    size = items[0].clientWidth;
    slide.style.transition = "none";
    slide.style.transform = `translateX(-${size * index}px)`;
  });

  setInterval(nextSlide, 5000);
});
