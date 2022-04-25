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



// get HR value from input
const onChange = (e) => {
    console.log(e.target.value);
}
const hrInput = document.getElementById("hr-textField");

hrInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        const value = parseInt(e.target.value);
        
        if(isNaN(value)){
            console.log("Please enter e number");
        }
        
        else{
            console.log(value);

            if(value > 42.5 || value < 2.5){
                
            }
        }

    }


})