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
        a.textContent=`${sec.dataset.nav}    `
        a.setAttribute('href',`#${sec.id}`)
        elem.appendChild(a)
        elem.setAttribute("data-nav",sec.id)
        navBar.appendChild(elem); 
    }); 
    
    


    const deactivateAllObeject= (objects)=>{
        objects.forEach((ll) =>{
            ll.classList.remove('active')
        })
    }
    navBar.addEventListener('click',(event)=>{
        
        event.preventDefault()
        const sectionSelected = document.getElementById(event.target.parentElement.dataset.nav)
        sectionSelected.scrollIntoView({behavior: 'smooth', block: 'center'})

    });
    

    const ScrollHandler = (entries,observer)=>{
        deactivateAllObeject(allSections)
        const allItems =navBar.querySelectorAll('li')
        deactivateAllObeject(allItems)
        entries.forEach((e)=>{
            if(e.intersectionRatio>0.2){
                e.target.classList.add('active')
                document.querySelector(`[data-nav=${e.target.id}]`).classList.add('active');

            }
        })
    }
    let ScrollOptions = {
        root: null, 
        rootMargin: '0px', 
        threshold: 1
      };
    
    let observer = new IntersectionObserver(ScrollHandler, ScrollOptions);
    allSections.forEach((sec)=>{
        observer.observe(sec)
    })

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


