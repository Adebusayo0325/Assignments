const slideshow = document.querySelectorAll(".slide");

slideshow.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});


let viewingSlide = 0;
let maxslide = slideshow.length - 1;
const nextslide = document.querySelector(".btn-next");

nextslide.addEventListener("click", function () {
  if (viewingSlide === maxslide) {
    viewingSlide = 0;
  } else {
    viewingSlide++;
  }

  slideshow.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - viewingSlide)}%)`;
  });
});

const prevslide = document.querySelector(".btn-prev");

prevslide.addEventListener("click", function () {
  if (viewingSlide === 0) {
    viewingSlide = maxslide;
  } else {
    viewingSlide--;
  
  }
  document.ge

  slideshow.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - viewingSlide)}%)`;
  });
});


prevslide.addEventListener("hover", function () {
  if (viewingSlide === 0) {
    viewingSlide = maxslide;
  } else {
    viewingSlide--;
  }

  slideshow.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - viewingSlide)}%)`;
  });
});
