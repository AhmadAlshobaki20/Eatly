// close and open menu icons
let menuBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
// navigate icons section two (our programs)
let arrow_section2_left = document.getElementById("arrow-left-section2");
let arrow_section2_right = document.getElementById("arrow-right-section2");

// open side bar
menuBtn.addEventListener("click", () => {
  let element = document.getElementById("Sidebar");
  element.classList.toggle("toggle-nav");
  menuBtn.style = "display:none;";
  closeBtn.style = "display:block;";
});
// close side bar
closeBtn.addEventListener("click", () => {
  let ele = document.getElementById("Sidebar");
  ele.classList.remove("toggle-nav");
  menuBtn.style = "display:block;";
  closeBtn.style = "display:none;";
});

// array of tabs (our programs tabs)
const tabs = document.querySelectorAll(".programs .tabs .content");
console.log(tabs);
let currentIndex = 0;
tabs[currentIndex].classList.add("activeTap");

function ChangeToSlide(index) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("activeTap");
  }
  currentIndex = index;
  tabs[currentIndex].classList.add("activeTap");
}

arrow_section2_left.addEventListener("click", backSlider);
function backSlider() {
  const previousIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  ChangeToSlide(previousIndex);
}

arrow_section2_right.addEventListener("click", comingSlider);
function comingSlider() {
  const nextIndex = (currentIndex + 1) % tabs.length;
  ChangeToSlide(nextIndex);
}

//Top Page
let toPage = document.querySelector(".up-page");
window.onscroll = function () {
  if (this.scrollY >= 200) {
    toPage.style.marginRight = "0px";
  } else {
    toPage.style.marginRight = "-70px";
  }
};

/*
// Slider Message 
*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".carousel-control-prev");
const nextButton = document.querySelector(".carousel-control-next");
let currentIndexSlider = 0;

prevButton.addEventListener("click", () => {
  currentIndexSlider = (currentIndexSlider - 1 + 3) % 3;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndexSlider = (currentIndexSlider + 1) % 3;
  updateCarousel();
});

function updateCarousel() {
  const translateXValue = -currentIndexSlider * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;
}

const carousel2 = document.querySelector(".carousel");
const prevButtonMobile = document.querySelector(
  ".carousel-control-prev-mobile"
);
const nextButtonMobile = document.querySelector(
  ".carousel-control-next-mobile"
);
let currentIndexSliderMobile = 0;

prevButtonMobile.addEventListener("click", () => {
  currentIndexSliderMobile = (currentIndexSliderMobile - 1 + 3) % 3;
  updateCarouselMobile();
});

nextButtonMobile.addEventListener("click", () => {
  currentIndexSliderMobile = (currentIndexSliderMobile + 1) % 3;
  updateCarouselMobile();
});

function updateCarouselMobile() {
  const translateXValue = -currentIndexSliderMobile * 100;
  carousel2.style.transform = `translateX(${translateXValue}%)`;
}
