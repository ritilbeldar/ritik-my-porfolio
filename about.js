const right_bar = document.querySelector(".ri-align-left");
const media_nav = document.querySelector("#media-ul");
const close_bar = document.querySelector(".ri-close-line");



right_bar.addEventListener("click",function() {
    media_nav.style.transform = "translatex(0)";
    right_bar.style.display = "none";
})

close_bar.addEventListener("click",function() {
    media_nav.style.transform = "translatex(-325px)";
    right_bar.style.display = "initial";
})




const about_right = document.querySelector(".ri-arrow-right-s-line");
const img_2 = document.querySelector("#img2");
const img_1 = document.querySelector("#img1");
const about_left = document.querySelector(".ri-arrow-left-s-line");


about_right.addEventListener("click",function() {
    img_2.style.transform = "translatex(0)";
    img_1.style.transform = "translatex(-100%)";
})


about_left.addEventListener("click",function() {
    img_2.style.transform = "translatex(100%)";
    img_1.style.transform = "translatex(0)";
})





const skill_right = document.querySelector("#skill-right-i");
const img_3 = document.querySelector("#img3");
const img_4 = document.querySelector("#img4");
const skill_left = document.querySelector("#skill-left-i");
const back_end = document.querySelector("#back-end");
const back_end_con = document.querySelector("#back-end-con");



skill_right.addEventListener("click",function() {
    img_4.style.transform = "translatex(0)";
    img_3.style.transform = "translatex(100%)";
})


skill_left.addEventListener("click",function() {
    img_3.style.transform = "translatex(0)";
    img_4.style.transform = "translatex(-100%)";
})


skill_right.addEventListener("click", function () {
    back_end.innerHTML = "BACK END";
    back_end.style.color = "red";
    back_end_con.innerHTML = "PHP / DB / JS / DBMS";
    back_end_con.style.color = "blue";
});
skill_left.addEventListener("click", function () {
    back_end.innerHTML = "FRONT END";
    back_end.style.color = "blue";
    back_end_con.innerHTML = "HTML / CSS / JS";
    back_end_con.style.color = "red";
});




// contect
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
    contect11.style.transform = "translatex(500%)";
    contect1.style.borderBottom = "none";
    home_border.style.borderBottom = "2px solid yellowgreen";
})



// nav-work

const nav_work_button = document.querySelector("#nav-work");
const nav_work_content = document.querySelector(".nav-work");



nav_work_button.addEventListener("click",function() {
    nav_work_content.style.display = "initial";
    home_border.style.borderBottom = "none";
    nav_work_button.style.borderBottom = "2px solid yellowgreen";

})