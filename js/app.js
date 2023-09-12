$(document).ready(function(){
    $('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
    });


    let hamberger=document.getElementsByClassName('hamberger')[0];
    let times=document.getElementsByClassName('times')[0];
    let nav=document.getElementsByClassName('mobile-nav')[0];

    hamberger.addEventListener('click',function(){
        nav.classList.add('open')
    })

    times.addEventListener('click',function(){
        nav.classList.remove('open')
    })
});