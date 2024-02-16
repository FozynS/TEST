"use strict";
const wrapper = document.querySelectorAll(".container")[1];

const onToggleModalMenu = (e) => {
    const modal = document.querySelector(".modal-window");

    if (e.target.closest("#about-btn")) {
    console.log("Click event fired!");
    modal.style.right = "0";
    }
    if (e.target.closest(".close")) {
    modal.style.right = "-110%";
    }
};

wrapper.addEventListener("click", onToggleModalMenu);
