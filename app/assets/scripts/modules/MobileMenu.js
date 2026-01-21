class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__nav')
        this.menuHeader = document.querySelector('.site-header')
        this.menuElement = document.querySelectorAll('.menu-element, .wrapper')
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
        this.menuElement.forEach(el => {
            el.addEventListener('click', () => {
              this.removeTheMenu()
            });
        });
    }

    removeTheMenu() {
        this.menuContent.classList.remove('site-header__nav--is-visible')
        this.menuHeader.classList.remove('site-header--is-expanded')
        this.menuIcon.classList.remove('site-header__menu-icon--close-x')
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('site-header__nav--is-visible')
        this.menuHeader.classList.toggle('site-header--is-expanded')
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }
    
}

export default MobileMenu;