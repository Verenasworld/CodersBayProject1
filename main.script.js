const toggleButton = document.getElementById('toggle');
const navlist = document.getElementById('navlist');
const linksInMenu = document.getElementById('skillLinks')

toggleButton.addEventListener('click', () => {
    navlist.classList.toggle('active')
})

