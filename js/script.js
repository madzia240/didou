// burger

const bars = document.querySelector('.fa-bars')
const times = document.querySelector('.fa-times')
const nav = document.querySelector('nav')

openNav = () => {
    nav.style.top = '0'
    times.style.display = 'block'
    bars.style.display = 'none'
}
closeNav = () => {
    nav.style.top = '-100%'
    bars.style.display = 'block'
    times.style.display = 'none'
}
bars.addEventListener('click', openNav)
times.addEventListener('click', closeNav)

// gotoSection

const liAbout = document.querySelector('#about')
const liProducts = document.querySelector('#products')
const liGallery = document.querySelector('#gallery')
const liContact = document.querySelector('#contact')
const logoBtn = document.querySelector('.logo')

liAbout.addEventListener('click', () => {
    window.scroll({
        top: document.querySelector('.about').offsetTop,
        behavior: 'smooth'
    });
    closeNav();
})
liProducts.addEventListener('click', () => {
    window.scroll({
        top: document.querySelector('.products').offsetTop,
        behavior: 'smooth'
    });
    closeNav();
})
liGallery.addEventListener('click', () => {
    window.scroll({
        top: document.querySelector('.gallery').offsetTop,
        behavior: 'smooth'
    });
    closeNav();
})
liContact.addEventListener('click', () => {
    window.scroll({
        top: document.querySelector('.contact').offsetTop,
        behavior: 'smooth'
    });
    closeNav();
})
logoBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
    closeNav();
})
// go to top
const upBtn = document.querySelector('.goToTop')

const visability = () => {

    if (window.scrollY > 100) {
        upBtn.style.opacity = '1'
        hrAbout.style.transform = 'translateX(-140%)'
        hrProducts.style.transform = 'translateX(-140%)'
        hrGallery.style.transform = 'translateX(-140%)'
        hrContact.style.transform = 'translateX(-140%)'
    }
    if (window.scrollY < 100) {
        upBtn.style.opacity = '0'
    }
    if (window.scrollY > (hrAbout.offsetTop - 400)) {
        hrAbout.style.transform = 'translateX(-10%)'
    }
    if (window.scrollY > (hrProducts.offsetTop - 400)) {
        hrProducts.style.transform = 'translateX(-10%)'
    }
    if (window.scrollY > (hrGallery.offsetTop - 400)) {
        hrGallery.style.transform = 'translateX(-10%)'
    }
    if (window.scrollY > (hrContact.offsetTop - 400)) {
        hrContact.style.transform = 'translateX(-10%)'
    }
}
upBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})
document.addEventListener('scroll', visability);

// hr 
const hrAbout = document.querySelector('.about hr')
const hrProducts = document.querySelector('.products hr')
const hrGallery = document.querySelector('.gallery hr')
const hrContact = document.querySelector('.contact hr')