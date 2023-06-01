function close_btn(){
    var announcebar = document.querySelector(".announcement_bar");
    announcebar.style.display = "none";
}

// start section_announcement_bar
var day = document.querySelector(".days");
var hour = document.querySelector(".hours");
var minute = document.querySelector(".minutes");
var second = document.querySelector(".seconds");
var countDown = () =>{
    let futureDate = new Date("29 june 2023");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    let days = Math.floor(myDate / 1000  / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(myDate / 1000 / 60) % 60;
    let seconds = Math.floor(myDate / 1000) % 60;
    day.innerText = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}
countDown();
setInterval(countDown,1000);

// end section_announcement_bar

// start products_page
var btns = document.querySelectorAll(".show");
btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        btns.forEach(function(e){
            e.classList.remove("active");
        })
        var products = document.querySelectorAll(".ltn__product-item");
        btn.classList.add("active");
        products.forEach(function(event){
            event.classList.remove("active");
        })
        var id = btn.getAttribute("data-id");
        var show_all_content = document.querySelectorAll('.'+ id);
        show_all_content.forEach(single_content =>{
            single_content.classList.add("active");
        })
    })
})
// end products_page

// start countdown2

var day1 = document.querySelector(".counter_days");
var hour1 = document.querySelector(".counter_hours");
var minute1 = document.querySelector(".counter_minutes");
var second1 = document.querySelector(".counter_seconds");
var countDown = () =>{
    let futureDate = new Date("29 May 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    let days = Math.floor(myDate / 1000  / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(myDate / 1000 / 60) % 60;
    let seconds = Math.floor(myDate / 1000) % 60;
    day1.innerHTML = days;
    hour1.innerHTML = hours;
    minute1.innerHTML = minutes;
    second1.innerHTML = seconds;
}
countDown();
setInterval(countDown,1000);

// end countdown2

// start mobile_menu
var closeBtn = document.querySelector(".ltn__utilize-close");
var toggleBtn = document.querySelector(".mobile-menu-toggle");
var sideBar = document.querySelector(".ltn__utilize-mobile-menu");

toggleBtn.addEventListener("click",()=>{
    sideBar.classList.toggle("show_sidebar");
})
closeBtn.addEventListener("click",()=>{
    sideBar.classList.remove("show_sidebar");
})
// end mobile_menu

