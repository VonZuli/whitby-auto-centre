"use strict";

// let reviews_prevBtn = `<button class="slider_nav">&larr; Previous</button>`;
// let reviews_nextBtn = `<button class="slider_nav">Next &rarr;</button>`;

let currentIndex = 0;
let newIndex = 0;

let slideElements = document.getElementsByClassName("slider_slide");
let slidesLength = slideElements.length;
let paginationElement = document.getElementsByClassName("slider_pagination")[0];
let navElements = document.getElementsByClassName("slider_nav");

navElements[0].addEventListener("click", () => {
  newIndex--;
  navigateSlider();
});
navElements[1].addEventListener("click", () => {
  newIndex++;
  navigateSlider();
});

function navigateSlider() {
  navElements[0].disabled = newIndex === 0;
  navElements[1].disabled = newIndex === slidesLength - 1;

  paginationElement.childNodes[currentIndex].classList.remove("slider_pagination_btn--sel");
  paginationElement.childNodes[newIndex].classList.add("slider_pagination_btn--sel");

  slideElements[currentIndex].style.display = "none";
  slideElements[newIndex].style.display = "block";
  currentIndex = newIndex;
}

let pagiantionHTML = [];

for (let i = 0; i < slidesLength; i++) {
  pagiantionHTML.push(`<button class="slider_pagination_btn" data-index="${i}"></button>`);
}
paginationElement.innerHTML = pagiantionHTML.join("");

paginationElement.addEventListener("click", function (e) {
  var target = e.target;
  if (target.classList.contains("slider_pagination_btn")) {
    newIndex = Number(target.getAttribute("data-index"));
    navigateSlider();
  }
});

const collapsible = function (e) {
  let content = this.nextElementSibling;

  content.style.display === "block"
    ? (content.style.display = "none")
    : (content.style.display = "block");
};
//remove active class when new button is clicked
//
let servicesBtn = document.querySelectorAll(".services_btn");
for (let i = 0; i < servicesBtn.length; i++) {
  servicesBtn[i].addEventListener("click", collapsible);
  servicesBtn[i].setAttribute("data-service", i);
}
