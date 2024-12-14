// MENU SHOW VS HIDDEN

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// For Menu to show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//For menu to hide
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')

linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on eah nav_link , we remove the show-menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n=>n.addEventListener('click', linkAction))


//SKILLS HIDDEN LOGIC 
//gave me tough time learn this logic over again !! and note that in multiple situation only one will have open while others will be close
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

    function skillsClose(){
        let itemClass = this.parentNode.className

        for(let j = 0; j < skillsContent.length; j++) {
            skillsContent[j].className = 'skills_content skills_close'

            if(itemClass === 'skills_content skills_close'){
                this.parentNode.className = 'skills_content skills_open'
            } 
        }
    }

    skillsHeader.forEach((el) =>{
        el.addEventListener('click', skillsClose)
    })
   
//QUALIFICATION TABS 
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})       


//SERVICES MODALS

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')


let modal = function(modalClick){
   modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


//PORTFOLIO SWIPER
// this must be linked first before main js
let swiperPortfolio = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});




//TESTIMONIAL
//same as above must be above the main js
const swiperTestimonial = new Swiper('.testimonial_container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
});

//SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sections = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sections + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}

window.addEventListener('scroll', scrollActive)

//CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById('header');

    //when the scroll is greater than 200 viewport height, add the scroll-header class to the headre tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// SHOW SCROLL UP

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    //when the scroll is greater than 560 viewport height, add the scroll-header class to the headre tag
    if (scrollUp.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp)


//DARK LIGHT THEME

const themeButton = document.getElementById('theme-button'),
      darkTheme = 'dark-theme',
      iconTheme = 'uil-sun'

//
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon')

//
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light', 
      getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
   // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and the current icon that the user selected
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})