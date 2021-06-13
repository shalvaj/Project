let burgerButton = document.getElementById('burgerButton');
let navBar = document.getElementById('navBar');



burgerButton.addEventListener('click',function() {
    navBar.classList.toggle('active');
})