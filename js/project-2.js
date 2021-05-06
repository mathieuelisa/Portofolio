// Custom cursor
const cursor = document.querySelector(".cursor")
const cursorCenter = document.querySelector(".cursorCenter")

// Movements
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

// Transition menu
const link_home = document.querySelector("#home")
const link_project1 = document.querySelector("#project1")
const link_project3 = document.querySelector("#project3")
const link_project4 = document.querySelector("#project4")

const line_home = document.querySelector("#line1")
const line_project2 = document.querySelector("#line2")
const line_project3 = document.querySelector("#line3")
const line_project4 = document.querySelector("#line4")

// Transition on "home"
link_home.addEventListener("mouseover", function(){
    line_home.style.transform = "scaleX(1)"
})
link_home.addEventListener("mouseleave", function(){
    line_home.style.transform = "scaleX(0)"
})
// Transition on "project2"
link_project1.addEventListener("mouseover", function(){
    line_project2.style.transform = "scaleX(1)"
})
link_project1.addEventListener("mouseleave", function(){
    line_project2.style.transform = "scaleX(0)"
})
// Transition on "project3"
link_project3.addEventListener("mouseover", function(){
    line_project3.style.transform = "scaleX(1)"
})
link_project3.addEventListener("mouseleave", function(){
    line_project3.style.transform = "scaleX(0)"
})
// Transtion on "project4"
link_project4.addEventListener("mouseover", function(){
    line_project4.style.transform = "scaleX(1)"
})
link_project4.addEventListener("mouseleave", function(){
    line_project4.style.transform = "scaleX(0)"
})

// Animation button on view link
const socialButton = document.querySelectorAll(".myFooterButton")

for (let i = 0; i < socialButton.length; i++) {
    socialButton[i].addEventListener("mouseenter", function(){
        cursor.classList.add("transparent")
        cursorCenter.classList.remove("cursorCenter")
        cursorCenter.classList.add("black")
    });
}

for (let i = 0; i < socialButton.length; i++) {
    socialButton[i].addEventListener("mouseleave", function(){
        cursor.classList.remove("transparent")
        cursorCenter.classList.add("cursorCenter")
        cursorCenter.classList.remove("black")
    });
}