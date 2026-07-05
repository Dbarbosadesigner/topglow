document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // HEADER
    // ==========================
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 80);
    });

    // ==========================
    // HERO
    // ==========================
    if(document.querySelector(".heroSlider")){

        new Swiper(".heroSlider",{

            loop:true,

            speed:900,

            autoplay:{
                delay:4000,
                disableOnInteraction:false
            },

            pagination:{
                el:".heroSlider .swiper-pagination",
                clickable:true
            }

        });

    }

    // ==========================
    // PRODUTOS
    // ==========================
    if(document.querySelector(".produtosSlider")){

        new Swiper(".produtosSlider",{

            loop:false,

            spaceBetween:30,

            pagination:{
                el:".produtosSlider .swiper-pagination",
                clickable:true
            },

            breakpoints:{

                0:{
                    slidesPerView:1
                },

                768:{
                    slidesPerView:2
                },

                1200:{
                    slidesPerView:3
                }

            }

        });

    }

    // ==========================
    // DEPOIMENTOS
    // ==========================
    if(document.querySelector(".depoimentosSlider")){

        new Swiper(".depoimentosSlider",{

            loop:true,

            autoplay:{
                delay:5000
            },

            pagination:{
                el:".depoimentosSlider .swiper-pagination",
                clickable:true
            }

        });

    }

});