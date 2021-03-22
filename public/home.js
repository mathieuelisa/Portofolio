let buttonScrollTop = document.querySelector(".buttonScroll")
let buttonScrollTop2 = document.querySelector(".topButtonScroll")
let rootElement = document.documentElement

// Function Add and Remove for button "back to the top"
function handleTop(){
    let result = rootElement.scrollHeight - rootElement.clientHeight

    if((rootElement.scrollTop / result) > 0.82){
        buttonScrollTop.classList.add("showBtn")
        buttonScrollTop2.classList.add("showBtn")
    } else{
        buttonScrollTop.classList.remove("showBtn")
        buttonScrollTop2.classList.remove("showBtn")
    }
}
document.addEventListener("scroll", handleTop)

// Use button "back to the top" with scroll
function backToTheTop(){
    rootElement.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}
buttonScrollTop.addEventListener("click", backToTheTop)


// Mouvement of the button "back to the top"
buttonScrollTop.addEventListener("mouseenter", function(){
    document.querySelector(".buttonScroll").classList.add("buttonScrollMovement")
});
buttonScrollTop.addEventListener("mouseleave", function(){
    document.querySelector(".buttonScroll").classList.remove("buttonScrollMovement")
})

// Custom cursor params
const cursor = document.querySelector(".cursor");
const cursorCenter = document.querySelector(".cursorCenter")
const btn = document.querySelectorAll("#bouton");
const mail = document.querySelector(".myEmail")
const toTheTop = document.querySelector(".backToTheTop")
const socialLink = document.querySelectorAll("#social-img")


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

// Animations cursor on projects buttons
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseenter", function(){   
        cursor.classList.add("black")
        cursorCenter.classList.remove("cursorCenter")
    })
};

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseleave", function(){ 
        cursor.classList.remove("black")
        cursorCenter.classList.add("cursorCenter")
    })
}

// Animation cursor on my email
mail.addEventListener("mouseenter", function(){
        cursor.classList.add("cursorMail")
        cursorCenter.classList.remove("cursorCenter")
    })

mail.addEventListener("mouseleave", function(){
    cursor.classList.remove("cursorMail")
    cursorCenter.classList.add("cursorCenter")
})

// Animation cursor on button to the top
toTheTop.addEventListener("mouseenter", function(){
    cursor.classList.add("cursorMail")
    cursorCenter.classList.remove("cursorCenter")
})
toTheTop.addEventListener("mouseleave", function(){
    cursor.classList.remove("cursorMail")
    cursorCenter.classList.add("cursorCenter")
})

// Animation cursor on social link
for (let i = 0; i < socialLink.length; i++) {
    socialLink[i].addEventListener("mouseenter", function(){
        cursor.classList.add("cursorMail")
        cursorCenter.classList.remove("cursorCenter")
    });
}

for (let i = 0; i < socialLink.length; i++) {
    socialLink[i].addEventListener("mouseleave", function(){
        cursor.classList.remove("cursorMail")
        cursorCenter.classList.add("cursorCenter")
    });
}

// socialLink.addEventListener("mouseenter", function(){
//     cursor.classList.add("cursorMail")
// })
// socialLink.addEventListener("mouseleave", function(){
//     cursor.classList.remove("cursorMail")
// })


// Animation on Click
document.addEventListener("click", function(){
    cursor.classList.add("expand")

    setTimeout(() => {
        cursor.classList.remove("expand")
    }, 500);
})

window.addEventListener("scroll",() => {
      document.body.style.setProperty("--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

// Animation with GSAP 
gsap.registerPlugin(ScrollTrigger);

const mainTitle = document.querySelector(".title-first-container")
const mainText = document.querySelector(".text-first-container")
const secondTitle = document.querySelector(".title-second-container")
const firstName = document.querySelector(".myName")
const myProjects1 = document.querySelector(".first-title-project")
const myProjects1Btn = document.querySelector(".wrapper-button-project1")
const myProjects1Img = document.querySelector(".mockup-img1")
const myProjects2 = document.querySelector(".second-title-project")
const myProjects2Btn = document.querySelector(".wrapper-button-project2")
const myProjects2Img = document.querySelector(".mockup-img2")
const myProjects3 = document.querySelector(".third-title-project")
const myProjects3Btn = document.querySelector(".wrapper-button-project3")
const myProjects3Img = document.querySelector(".mockup-img3")
const myProjects4 = document.querySelector(".fourth-title-project")
const myProjects4Btn = document.querySelector(".wrapper-button-project4")
const myProjects4Img = document.querySelector(".mockup-img4")

const myMail = document.querySelector(".myEmail")
const folio = document.querySelector(".folio")


gsap.fromTo(mainTitle, 1,{opacity:0, x:50}, {opacity:1, x:0})
gsap.fromTo(mainText, 1, {opacity:0, x:50}, {opacity:1, x:0})

gsap.to(".title-second-container",1,{
    scrollTrigger : ".title-second-container",
    y:-40,
})

gsap.to(".mySecondText", 1, {
    scrollTrigger : ".mySecondText",
    y: -40,
})

gsap.fromTo(firstName,1,{opacity:0, x:-50}, {opacity:1, x:0})

// First project
gsap.fromTo(myProjects1, 1, {opacity:0, scrollTrigger : myProjects4,x: -50,},
    {opacity:1, scrollTrigger: myProjects1, x:0})

gsap.to(myProjects1Btn, 1, {
    scrollTrigger : myProjects1,
    x: 50,
})
gsap.to(myProjects1Img, 1, {
    scrollTrigger : myProjects1Img,
    x: -90,
})

// Second Project
gsap.fromTo(myProjects2, 1, {opacity:0, scrollTrigger : myProjects4,x: 50,},
    {opacity:1, scrollTrigger: myProjects2, x:0})

gsap.to(myProjects2Btn, 1, {
    scrollTrigger : myProjects2,
    x: -50,
})

gsap.to(myProjects2Img, 1, {
    scrollTrigger : myProjects2Img,
    x: 20,
})

// Third Project

gsap.fromTo(myProjects3, 1, {opacity:0, scrollTrigger : myProjects3,x: -50,},
    {opacity:1, scrollTrigger: myProjects3, x:0})

gsap.to(myProjects3Btn, 1, {
    scrollTrigger : myProjects3,
    x: 50,
})

gsap.to(myProjects3Img, 1, {
    scrollTrigger : myProjects3Img,
    x: -90,
})

// Fourth Project

gsap.fromTo(myProjects4, 1, {opacity:0, scrollTrigger : myProjects4,x: 50,},
    {opacity:1, scrollTrigger: myProjects4, x:0})

gsap.to(myProjects4Btn, 1, {
    scrollTrigger : myProjects4,
    x: -50,
})

gsap.to(myProjects4Img, 1, {
    scrollTrigger : myProjects4Img,
    x: 130,
})

gsap.fromTo(myMail, 3, {opacity: 0, scrollTrigger : myMail,y: -60,},
    {opacity: 1,scrollTrigger : myMail, y:00})

// Footer

gsap.fromTo(folio,5, {scrollTrigger: folio, opacity:0}, {scrollTrigger: folio, opacity:1})