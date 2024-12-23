

document.addEventListener("DOMContentLoaded", function(e){
    rightMenuSlide();
    mainSlideBanner();
    mainLogoSlide();
    serviceSlide();
})

const serviceSlide = () => {
    var swiper = new Swiper(".main .specialSection .slideBox .mySwiper", {
        slidesPerView: 3.2,
        spaceBetween: 22,
        loop : true, 
        loopAdditionalSlides: 5,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            900: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            650: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
        },
    });
}

const mainLogoSlide = () => {
    var swiper = new Swiper(".main .logoSection .logoBox .mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 0, // important !!
            disableOnInteraction: false,
        },
        speed: 5000,
        loop : true,
        loopAdditionalSlides: 1,
        slidesPerView: 8,
        allowTouchMove: false,
    });
}

const mainSlideBanner = () => {
    var swiper = new Swiper(".main .bannerSlide .mySwiper", {
        loop : true, 
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".main .bannerSlide .slideArti .halfBox .contentBox .btnWrapDiv .btnList .nextBtn",
            prevEl: ".main .bannerSlide .slideArti .halfBox .contentBox .btnWrapDiv .btnList .prevBtn",
        },
    });
}

const rightMenuSlide = () => {
    $('#header_24 .sideMenuBtn').click(function(){
        $('.menuCloseBg').addClass('show');
        $('.rightMenuSection').addClass('show');
    })
    $('.menuCloseBg').click(function(){
        $('.menuCloseBg').removeClass('show');
        $('.rightMenuSection').removeClass('show');
    })
    $('.rightMenuSection .closeBtnDiv .closeBtn').click(function(){
        $('.menuCloseBg').removeClass('show');
        $('.rightMenuSection').removeClass('show');
    })
}