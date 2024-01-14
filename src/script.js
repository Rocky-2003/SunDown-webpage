// "use strict";
// const imgElements = document.querySelectorAll("#page3 .elem");
// const image = document.querySelector(".common-img .img1");
// const imageContainer = document.querySelector(".common-img");

// // * locomotive scrool effect
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

// // *add imgae when mouse enter
// imgElements.forEach((el) => {
//   el.addEventListener("mouseover", function (e) {
//     // console.log(el.data.img);
//     if (el.dataset.img !== e.target.dataset.img) return;
//     image.src = `${el.dataset.img}`;
//     imageContainer.style.display = "block";
//   });
// });

// // * removing image when mouse leave
// imgElements.forEach((el) => {
//   el.addEventListener("mouseleave", function (e) {
//     if (el.dataset.img !== e.target.dataset.img) return;
//     imageContainer.style.display = "none";
//   });
// });

"use strict";

const imgElements = document.querySelectorAll("#page3 .elem");
const image = document.querySelector(".common-img .img1");
const imageContainer = document.querySelector(".common-img");

// Function to load images asynchronously
function loadImageAsync(url, callback) {
  const img = new Image();
  img.src = url;

  img.onload = function () {
    if (typeof callback === "function") {
      callback(img);
    }
  };
}

// Locomotive Scroll initialization
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// Add image when mouse enters
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

// Remove image when mouse leaves
imgElements.forEach((el) => {
  el.addEventListener("mouseleave", function (e) {
    if (el.dataset.img !== e.target.dataset.img) return;
    imageContainer.style.display = "none";
  });
});
