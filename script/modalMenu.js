"use strict";
const wrapper = document.querySelector('.container');

const onToggleModalMenu = (e) => {
    console.log(e.target.closest('#about-btn'));
    const modal = document.querySelector('.modal-window');
    
    if(e.target.closest('#about-btn')) {
        modal.style.right = '0';
    }
    if(e.target.closest('.close')) {
        modal.style.right = '-41%';
    }
}

wrapper.addEventListener('click', onToggleModalMenu);