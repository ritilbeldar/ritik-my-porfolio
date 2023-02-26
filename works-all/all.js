// // media_nav
// const right_bar = document.querySelector(".ri-align-left");
// const media_nav = document.querySelector(".media-nav");
// const close_bar = document.querySelector(".ri-close-line");



// right_bar.addEventListener("click",function() {
//     media_nav.style.transform = "translatex(0)";
//     right_bar.style.display = "none";
// })

// close_bar.addEventListener("click",function() {
//     media_nav.style.transform = "translatex(-325px)";
//     right_bar.style.display = "initial";
// })

// project-button

const nav_work_button = document.querySelector("#works-boder");
const nav_work_content = document.querySelector(".nav-work");



nav_work_button.addEventListener("click",function() {
    nav_work_content.style.display = "initial";
})


// all-js

$('.work-bottom-center').slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      }
);



// contect-button

const all_contect_button = document.querySelector(".all-contect-button");
const all_hover_contect_button = document.querySelector("#all-hover-contect-button");
const contect_close1 = document.querySelector("#contect-close1");
const works_boder = document.querySelector("#works-boder");




all_hover_contect_button.addEventListener("click",function() {
    all_contect_button.style.transform = "translatex(0)";
    all_hover_contect_button.style.borderBottom = "2px solid  yellowgreen";
    works_boder.style.borderBottom = "none";
})

contect_close1.addEventListener("click",function() {
    all_contect_button.style.transform = "translatex(550%)";
    all_hover_contect_button.style.borderBottom = "none";
    works_boder.style.borderBottom = "2px solid  yellowgreen";
})
