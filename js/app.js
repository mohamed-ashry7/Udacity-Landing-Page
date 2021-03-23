/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
document.addEventListener('DOMContentLoaded',()=>{

    const allSections = document.querySelectorAll('section'); 
    const navBar = document.querySelector('#navbar__list')
    allSections.forEach(sec => {
        const elem = document.createElement('li');
        const a = document.createElement('a')
        a.textContent=`${sec.dataset.nav}  |  `
        a.setAttribute('href',`#${sec.id}`)
        elem.appendChild(a)
        if(sec.classList.contains("active")){
            elem.classList.add("active")
        }
        navBar.appendChild(elem); 
    }); 
    
    



    navBar.addEventListener('click',(event)=>{
        const getTheIdFromHref= (str)=> { 
            return str.substring(str.indexOf('#')+1)
        };
        event.preventDefault()
        const allItems = navBar.querySelectorAll('li')
        const sectionSelected = document.getElementById(getTheIdFromHref(event.target.href))
        allItems.forEach((ll) =>{
            ll.classList.remove('active')
        })
        allSections.forEach((ss)=>{
            ss.classList.remove('active')
        })

        sectionSelected.scrollIntoView({behavior: 'smooth', block: 'center'})
        event.target.parentElement.classList.add("active")
        sectionSelected.classList.add("active")
        console.log(allSections)
        // console.log(allItems)

    }); 

})


/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


