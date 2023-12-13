

const toggleButton = document.getElementById('nav-toggle')
const navLink = document.getElementById('toggle-bar')


toggleButton.addEventListener('click', ()=>{
    navLink.classList.toggle('active')
})