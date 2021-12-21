const toggle = document.querySelector('.nav-toggle')
const hideNav = document.querySelector('.hidden-links')



toggle.addEventListener('click',function(){
    hideNav.classList.toggle('show');
    toggle.currentSrc = './images/icon-close.svg'
})