"use strict";

const accardions = document.querySelectorAll(".accardion");

accardions.forEach((accardion) => {
  accardion.addEventListener("click", (e) => {
    accardion.classList.toggle("activeAc");
    if (accardion.children[0].children[1].textContent === "-") {
      accardion.children[0].children[1].textContent = "+";
    } else {
      accardion.children[0].children[1].textContent = "-";
    }
  });
});
