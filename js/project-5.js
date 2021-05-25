// Custom cursor
const cursor = document.querySelector(".cursor")
const cursorCenter = document.querySelector(".cursorCenter")

document.addEventListener("mousemove", function(e){

    let x = e.pageX;
    let y = e.pageY

    cursor.setAttribute("style", "top: " + (y-15) + "px; left: " + (x-15) + "px")
})

document.addEventListener("mousemove", function(a){
    let c = a.pageX
    let b = a.pageY

    cursorCenter.setAttribute("style", "top: " + (b-3) + "px; left: " + (c-3) +"px")
})

// Hamburger menu
const burger = document.querySelector(".hamburger")
const myBody = document.querySelector("body")
const myNav = document.querySelector("nav")

burger.addEventListener("click", function(){
    burger.classList.toggle("is-active")
    myNav.classList.toggle("nav--open")
    myBody.classList.toggle("menu--open")
})

// Transition menu
let elems = ["home", "project1", "project2", "project3", "project4"]
let links = ["line1", "line2", "line3", "line4", "line5"]

for (let i = 0; i < elems.length; i++) {
   let link = document.getElementById(elems[i]);
   let line = document.getElementById(links[i]);

   link.addEventListener("mouseover", function(){
       line.style.transform = "scaleX(1)";
   })
   link.addEventListener("mouseleave", function(){
       line.style.transform = "scaleX(0)";
   })
}

// Animation button on view link
const socialButton = document.querySelectorAll(".myFooterButton")

for (let i = 0; i < socialButton.length; i++) {
    socialButton[i].addEventListener("mouseenter", function(){
        cursor.classList.add("transparent")
        cursorCenter.classList.remove("cursorCenter")
        cursorCenter.classList.add("black")
    });

    socialButton[i].addEventListener("mouseleave", function(){
        cursor.classList.remove("transparent")
        cursorCenter.classList.add("cursorCenter")
        cursorCenter.classList.remove("black")
    });
}