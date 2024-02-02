"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#tiler');
    const wrapper = document.querySelector('.container');
    
    const onTailer = () => {
        window.location.href = './pages/second-index.html';
    }
    
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
    btn.addEventListener('click',onTailer);

})