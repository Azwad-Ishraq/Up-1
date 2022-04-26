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

const rotation_animation_func = (lowest_value, highest_value,currentValue) => {
    lowest_value = parseInt(lowest_value);
    highest_value = parseInt(highest_value);
    const valueDef = highest_value - lowest_value;
    const rotation_degree_per_value = 180/valueDef;
    const total_rotation_value = currentValue * rotation_degree_per_value;
    return total_rotation_value;
}

const increment_value = (element,value) => {
    const elementValue = parseInt(element.innerText);
    console.log(elementValue)
    if(elementValue< value){
        element.innerText++; 
        setTimeout(()=>{
            increment_value(element,value)
        },20)
    }
}


// hr animation
const hr_test_value = 55;
const hr_lowest_value_element = document.getElementById('hr-lowest-value');

const hr_highest_value_element = document.getElementById('hr-highest-value')

const hr_meter_needle = document.getElementById('hr-meter-needle')

const hr_bpm_score_element = document.getElementById('hr-score');

hr_lowest_value_element.textContent = '5';
hr_highest_value_element.textContent = '90';

const total_rotation_value = rotation_animation_func(hr_lowest_value_element.textContent,hr_highest_value_element.textContent, hr_test_value)

const rotation_timeout = setTimeout(()=>{
    hr_meter_needle.style.transform = `rotate(${total_rotation_value}deg)`
    increment_value(hr_bpm_score_element,hr_test_value)
},500)


// Variability animation
const var_test_value = 80;

const var_highest_value_element = document.getElementById('var-highest-value')
const var_lowest_value_element = document.getElementById('var-lowest-value')

const var_meter_needle = document.getElementById('var-meter-needle');

const var_score_element = document.getElementById('var-score');

var_highest_value_element.textContent = '90';
var_lowest_value_element.textContent = '5';

const var_total_rotation_value = rotation_animation_func(var_lowest_value_element.textContent, var_highest_value_element.textContent, var_test_value);

const var_rotation_timeout = setTimeout(()=>{
    var_meter_needle.style.transform = `rotate(-${var_total_rotation_value}deg)`
    increment_value(var_score_element,var_test_value)
},500)























// console.log(parseInt(hr_highest_value.textContent));

// const hr_lowest_value = parseInt(hr_lowest_value_element.textContent);

// const hr_highest_value = parseInt(hr_highest_value_element.textContent);

// const valueDef = hr_highest_value - hr_lowest_value;

// const rotation_degree_per_value = 180/valueDef;

// const total_rotation_value = 40*rotation_degree_per_value;
// console.log(total_rotation_value);
































//  get HR value from input
// const onChange = (e) => {
//     console.log(e.target.value);
// }
// const hrInput = document.getElementById("hr-textField");

// hrInput.addEventListener("keypress", (e) => {

//     if(e.key === "Enter"){

//         const value = parseInt(e.target.value);
        
//         if(isNaN(value)){
//             console.log("Please enter e number");
//         }
        
//         else{
//             console.log(value);

//             if(value > 42.5 || value < 2.5){
                
//             }
//         }

//     }


// })

