$(document).ready(function() {
    AOS.init({
        duration : "1000"
    });
    $("footer button").on("click",function(){
        $("html,body").animate({
            "scrollTop" : 0
        })
    })

    $(".con1 .list .item > button .off").on("click",function(){
        $(this).css({
            "display" : "none"
        })
        $(this).siblings(".on").css({
            "display" : "block"
        }).siblings(".on").css({
            "display" : "none"
        })
        $(".con1 .list .item > button .on").on("click",function(){
            $(this).siblings().css({
                "display" : "block"
            })
            $(this).css({
                "display" : "none"
            })
        })
    })

    $(".con3 .select button").on("click", function() {
        $(".con3 .select .guides").stop().slideToggle();
        $(this).toggleClass("on");
    })
    
    $(".con3 .select .guides li").on("click", function() {
        $(".con3 .select .guides").stop().slideUp();
    })
    
    var init = 0;
    function controlSlider() {
        var idx = init % $(".con3 .step .round button").length;

        $(".con3 .guide .txt p").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
        $(".con3 .guide .image .layer").eq(idx).addClass("active");
        setTimeout(function() {
            $(".con3 .guide .image .layer").eq(idx).siblings().removeClass("active");
        }, 400);
        $(".con3 .step .round button").eq(idx).addClass("active").siblings().removeClass("active");
    }

    $(".con3 .nxt-arrow").on("click", function() {
        init++;
        controlSlider();
    });

    $(".con3 .step .round .circle").on("click", function() {
        var i = $(this).index();
        init = i;
        controlSlider();
    })  
      
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
        //   el: ".swiper-pagination",
          clickable: true,
        },
    });

    $(".con4 .box a").on("click", function(e){e.preventDefault();})

})