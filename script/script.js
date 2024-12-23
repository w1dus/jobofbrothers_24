

document.addEventListener("DOMContentLoaded", function(e){
    rightMenuSlide();
    mainSlideBanner();
})

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