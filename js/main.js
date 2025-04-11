// Бургер меню -->
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open")
})
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("body").classList.toggle("fixed")
    })
    });

document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector("header").classList.remove("open");
});

// Плавный скролл
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.scroll--wrapper',
    content: '.scroll--content',
    smooth: 1.5,
    effects: true,
})

// Анимация блока header -->

const tl = gsap.timeline()

tl.fromTo('.logo', {
    x: -200,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
    duration: 1,
}).fromTo('.slogan h1', {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duration: 1,
}).fromTo('.slogan h2', {
    x: 50,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
    duration: 1,
}).fromTo('.header__buttons .button--one', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 0.4,
}).fromTo('.header__buttons .button--two', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 0.4,
}).fromTo('.header__buttons .button--three', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 0.4,
})

// 
tl.fromTo('.about--company', {
    opacity: 0,
    ScrollTrigger: {
        trigger: '.about--company',
        scrub: true
    }
} ,{
    opacity: 1,
})