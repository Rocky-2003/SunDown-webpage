"use strict";
const imgElements = document.querySelectorAll("#page3 .elem");
const image = document.querySelector(".img1");
const imageContainer = document.querySelector(".common-img");

// * locomotive scrool effect
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// *add imgae when mouse enter
imgElements.forEach((el) => {
  el.addEventListener("mouseover", function (e) {
    if (el.dataset.img !== e.target.dataset.img) return;
    image.src = `src/img/${e.target.dataset.img}.png`;
    imageContainer.style.display = "block";
  });
});

// * removing image when mouse leave
imgElements.forEach((el) => {
  el.addEventListener("mouseleave", function (e) {
    if (el.dataset.img !== e.target.dataset.img) return;
    imageContainer.style.display = "none";
  });
});
