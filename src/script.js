"use strict";

const imgElements = document.querySelectorAll("#page3 .elem");
const image = document.querySelector(".common-img .img1");
const imageContainer = document.querySelector(".common-img");
const changeColorH4 = document.querySelectorAll(".bold-content h4");
const bottomPart4Img = document.querySelector(".bottom-part4-right-img");
const bottmPart4Line = document.querySelector(".line");

//* Function to load images asynchronously
function loadImageAsync(url, callback) {
  const img = new Image();
  img.src = url;

  img.onload = function () {
    if (typeof callback === "function") {
      callback(img);
    }
  };
}

//* Locomotive Scroll initialization
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//* Add image when mouse enters
imgElements.forEach((el) => {
  el.addEventListener("mouseover", function (e) {
    if (el.dataset.img !== e.target.dataset.img) return;

    // Load image asynchronously
    loadImageAsync(el.dataset.img, function (loadedImage) {
      image.src = loadedImage.src;
      imageContainer.style.display = "block";
    });
  });
});

//* Remove image when mouse leaves
imgElements.forEach((el) => {
  el.addEventListener("mouseleave", function (e) {
    if (el.dataset.img !== e.target.dataset.img) return;
    imageContainer.style.display = "none";
  });
});
5;
//* Add imgae when click happen

const changeColor = function () {
  changeColorH4.forEach((el) => {
    el.style.color = "#504A45";
  });
};

changeColorH4.forEach((el) => {
  el.addEventListener("click", (e) => {
    changeColor();
    const classValue = el.classList.value;
    const gradientStops = {
      1: " #fe3f0a 35%, #423c37 35%  ",
      2: " #423c37 35%, #fe3f0a 35%, #fe3f0a 65%, #423c37 65%",
      3: "#423c37 65%, #fe3f0a 65%, #fe3f0a 100%",
    };
    if (el.dataset.line === e.target.dataset.line) {
      loadImageAsync(el.dataset.line, function (loadedImage) {
        bottomPart4Img.src = loadedImage.src;
      });

      el.style.color = "white";
      bottmPart4Line.style.background = `linear-gradient(to bottom,  ${gradientStops[classValue]})`;
    }
  });
});
