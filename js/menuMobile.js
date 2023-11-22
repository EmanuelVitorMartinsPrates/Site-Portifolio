const buttonMenu = document.querySelector('.button__menu--mobile')
const menuMobile = document.querySelector('.cabecalho__menu--mobile')
let isMenuOpen = false



buttonMenu.addEventListener('click', function () {
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')

    isMenuOpen ? buttonMenu.children[0].setAttribute('src', 'assets/menu.svg') : buttonMenu.children[0].setAttribute('src', 'assets/close.svg')

    isMenuOpen = !isMenuOpen

})