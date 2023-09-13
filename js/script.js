
$(document).ready(function() {
    let $loader = $('.loader-wrapper');

    if ($loader.length) {
        $(window).on('load', function() {
            $('body').addClass('no-scroll');
            setTimeout(function() {
                $loader.fadeOut(300);
                $('body').removeClass('no-scroll');
            }, 800);
        });
    }
});



let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileClose = document.querySelector('.mob-btn-close');
let mobileBg = document.querySelector('.mobile-bg');
let langItem = document.querySelector('.lang-item');
let dropdownMenu = document.querySelector('.dropdown-menu-lang');
let langItemMob = document.querySelector('.lang-item-mobile');
let dropdownMenuMob = document.querySelector('.dropdown-menu-lang-mob');
let closeLinks = document.querySelectorAll('#mobile-close-link');


if(langItem !== null && langItem !== undefined) {
    langItem.addEventListener('click', function() {
        dropdownMenu.classList.toggle('dropdown-menu-lang-open');
        this.classList.toggle('lang-item-active');
    });
}

if(langItemMob !== null && langItemMob !== undefined) {
    langItemMob.addEventListener('click', function() {
        dropdownMenuMob.classList.toggle('dropdown-mob-open');
        this.classList.toggle('lang-item-mobile-active');
    });
}

for (let i = 0; i < closeLinks.length; i++) {
    if(closeLinks[i] !== null && closeLinks[i] !== undefined) {
        closeLinks[i].addEventListener('click', function() {
            mobileMenu.classList.remove('mobile-menu-open');
            mobileBg.classList.remove('mobile-bg-open');
            document.body.classList.remove('no-scroll');
        });
    }
}

if(burger !== null && burger !== undefined) {
    burger.addEventListener('click', function() {
        mobileBg.classList.add('mobile-bg-open');
        mobileMenu.classList.add('mobile-menu-open');
        document.body.classList.add('no-scroll');
    });
}

if(mobileClose !== null && mobileClose !== undefined) {
    mobileClose.addEventListener('click', function() {
        mobileMenu.classList.remove('mobile-menu-open');
        mobileBg.classList.remove('mobile-bg-open');
        document.body.classList.remove('no-scroll');
    });
}

if(mobileBg !== null && mobileBg !== undefined) {
    mobileBg.addEventListener('click', function() {
        mobileBg.classList.remove('mobile-bg-open');
        mobileMenu.classList.remove('mobile-menu-open');
        document.body.classList.remove('no-scroll');
    });
}



let swiper = document.querySelector('.swiper');

if (swiper !== null && swiper !== undefined) {
    new Swiper(swiper, {
        effect: 'coverflow',
        grabCursor: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 40,
        initialSlide: 0,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows : true,
    
            breakpoints: {
                360: {
                    depth: 0,
                },
                
              },
        },
        navigation: {
            nextEl: '.swiper-button-next',
        },
    
    });
} 



let accordionTop = document.querySelectorAll('.accordion-top');

for (let i = 0; i < accordionTop.length; i++) {
    if(accordionTop[i] !== null && accordionTop[i] !== undefined) {
        accordionTop[i].addEventListener('click', () => {
            accordionTop[i].classList.toggle('accordion-top-active');
            let accordionBottom = accordionTop[i].nextElementSibling;
            if(accordionBottom !== null && accordionBottom !== undefined) {
                if(accordionBottom.style.maxHeight) {
                    accordionBottom.style.maxHeight = null;
                } else {
                    accordionBottom.style.maxHeight = accordionBottom.scrollHeight + "px";
                }
            } 
        });
    } 
}

