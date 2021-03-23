


document.addEventListener('DOMContentLoaded',()=>{
    // Populating the nav bar elements from the sections
    const allSections = document.querySelectorAll('section'); 
    const navBar = document.querySelector('#navbar__list')
    allSections.forEach(sec => {
        const elem = document.createElement('li');
        const a = document.createElement('a');
        a.textContent=`${sec.dataset.nav}    `;
        a.setAttribute('href',`#${sec.id}`);
        elem.appendChild(a);
        elem.setAttribute("data-nav",sec.id);
        navBar.appendChild(elem); 
    }); 
    
    

    
    const deactivateAllObeject= (objects)=>{
        objects.forEach((ll) =>{
            ll.classList.remove('active');
        })
    }

    navBar.addEventListener('click',(event)=>{
        
        event.preventDefault();
        const sectionSelected = document.getElementById(event.target.parentElement.dataset.nav);
        sectionSelected.scrollIntoView({behavior: 'smooth', block: 'center'});

    });
    

    const ScrollHandler = (entries,observer)=>{
        deactivateAllObeject(allSections);
        const allItems =navBar.querySelectorAll('li');
        deactivateAllObeject(allItems);
        entries.forEach((e)=>{
            if(e.intersectionRatio>0.2){
                // Activating the element into the view port. 
                e.target.classList.add('active');
                document.querySelector(`[data-nav=${e.target.id}]`).classList.add('active');

            }
        })
    }
    const ScrollOptions = {
        root: null, 
        rootMargin: '0px', 
        threshold: 1
      };
    
    const observer = new IntersectionObserver(ScrollHandler, ScrollOptions);
    allSections.forEach((sec)=>{
        observer.observe(sec);
    });

})





