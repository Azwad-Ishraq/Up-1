const menus = document.querySelectorAll('[data-menu-target]');
const menuContents = document.querySelectorAll('[data-menu-content]')

menus.forEach(menu=> {
    menu.addEventListener('click', ()=>{

        const target = document.querySelector(menu.dataset.menuTarget)

        menuContents.forEach(menuContent => {
            menuContent.classList.remove('active')
        })
        menus.forEach(menu => {
            menu.classList.remove('active')
        })

        menu.classList.add('active')
        target.classList.add ('active')
        

    })
})