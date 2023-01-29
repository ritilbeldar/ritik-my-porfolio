const right_bar = document.querySelector(".ri-align-left");
const media_nav = document.querySelector(".media-nav");
const close_bar = document.querySelector(".ri-close-line");
// const center = document.querySelector(".center");



right_bar.addEventListener("click",function() {
    media_nav.style.transform = "translatex(0)";
    right_bar.style.display = "none";
})

close_bar.addEventListener("click",function() {
    media_nav.style.transform = "translatex(-325px)";
    right_bar.style.display = "initial";
})



// contect11
const contect11 = document.querySelector(".contect1-contect-content");
const contect1 = document.querySelector("#contect-home-contect-button");
const contect_close = document.querySelector("#contect-close");
const home_border = document.querySelector("#border");



contect1.addEventListener("click",function() {
    contect11.style.transform = "translatex(0)";
    contect1.style.borderBottom = "2px solid yellowgreen";
    home_border.style.borderBottom = "none";
})
contect_close.addEventListener("click",function() {
    contect11.style.transform = "translatex(400%)";
    contect1.style.borderBottom = "none";
    home_border.style.borderBottom = "2px solid yellowgreen";
})




// work

// button

const work_all_button = document.querySelector("#work-button");
const work_cloun_button = document.querySelector("#work-cloun");
const work_by_me_button = document.querySelector("#work-by-me");

// work-bottom-mian
const work_all = document.querySelector(".work-bottom-mian");
const work_cloun = document.querySelector(".work-bottom-mian2");
const work_by_me = document.querySelector(".work-bottom-mian1");

work_cloun_button.addEventListener("click",function() {
    work_cloun.style.transform = "translatex(0)";
    work_all.style.transform = "translatex(-120%)";
    work_by_me.style.transform = "translatex(120%)";
    work_cloun_button.style.borderBottom = "4px solid yellow";
    work_all_button.style.borderBottom = "none";
    work_by_me_button.style.borderBottom = "none";
})

work_by_me_button.addEventListener("click",function() {
    work_by_me.style.transform = "translatex(0)";
    work_cloun.style.transform = "translatex(-120%)";
    work_all.style.transform = "translatex(-160%)";
    work_by_me_button.style.borderBottom = "4px solid yellow";
    work_cloun_button.style.borderBottom = "none";
    work_all_button.style.borderBottom = "none";
})

work_all_button.addEventListener("click",function() {
    work_all.style.transform = "translatex(0)";
    work_by_me.style.transform = "translatex(220%)";
    work_cloun.style.transform = "translatex(220%)";
    work_all_button.style.borderBottom = "4px solid yellow";
    work_by_me_button.style.borderBottom = "none";
    work_cloun_button.style.borderBottom = "none";
})



// nav-work-button

const nav_work_button = document.querySelector("#nav-work");
const nav_work_content = document.querySelector(".nav-work");



nav_work_button.addEventListener("click",function() {
    nav_work_content.style.display = "initial";
    home_border.style.borderBottom = "none";
    nav_work_button.style.borderBottom = "2px solid yellowgreen";

})

nav_work_button.addEventListener("click",function() {
    // nav_work_content.style.display = "none";
})




$('.work-bottom1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  });

  $('.work-bottom2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  });

  $('.work-bottom3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  });