

// project-button

const nav_work_button = document.querySelector("#works-boder");
const nav_work_content = document.querySelector(".nav-work");



nav_work_button.addEventListener("click",function() {
    nav_work_content.style.display = "initial";
})


// all-js,by-me-js,clone-js

$('.work-bottom-center').slick(
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      }
);


// const contect11 = document.querySelector(".contect1-contect-content");
// // const contect1 = document.querySelector("#contect-home-contect-button");
// const contect_close = document.querySelector("#contect-close");
// // const home_border = document.querySelector("#border");


// contect_close.addEventListener("click",function() {
//     // contect11.style.transform = "translatex(0)";
//     // contect1.style.borderBottom = "2px solid yellowgreen";
//     contect11.style.display = "none";
// })


// contect1.addEventListener("click",function() {
//     contect11.style.transform = "translatex(0)";
//     contect1.style.borderBottom = "2px solid yellowgreen";
//     home_border.style.borderBottom = "none";
// })
// contect_close.addEventListener("click",function() {
//     contect11.style.transform = "translatex(400%)";
//     contect1.style.borderBottom = "none";
//     home_border.style.borderBottom = "2px solid yellowgreen";
// })


