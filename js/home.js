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
        cursor.classList.add("cursorLink")
        cursorCenter.classList.remove("cursorCenter")
    });
}

for (let i = 0; i < socialLink.length; i++) {
    socialLink[i].addEventListener("mouseleave", function(){
        cursor.classList.remove("cursorLink")
        cursorCenter.classList.add("cursorCenter")
    });
}

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
const firstName = document.querySelector(".myName")

const secondTitle = document.querySelector(".title-second-container")

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

gsap.to(secondTitle,1,{
    scrollTrigger : secondTitle,
    y:-40,
})

gsap.to(".mySecondText", 1, {
    scrollTrigger : ".mySecondText",
    y: -40,
})

gsap.fromTo(firstName,1,{opacity:0, x:-50}, {opacity:1, x:0})

// First project
gsap.to(myProjects1, 1, {
    scrollTrigger : myProjects1,
    x: 50,
})

gsap.to(myProjects1Btn, 1, {
    scrollTrigger : myProjects1,
    x: 50,
})

gsap.to(myProjects1Img, 1, {
    scrollTrigger : myProjects1Img,
    x: -90,
})

// Second Project
gsap.to(myProjects2, 1, {
    scrollTrigger: myProjects2,
    x: -50,
})

gsap.to(myProjects2Btn, 1, {
    scrollTrigger : myProjects2,
    x: -50,
})

gsap.to(myProjects2Img, 1, {
    scrollTrigger : myProjects2Img,
    x: 40,
})

// Third Project
gsap.to(myProjects3, 1, {
    scrollTrigger : myProjects3,
    x: 50,
})

gsap.to(myProjects3Btn, 1, {
    scrollTrigger : myProjects3,
    x: 50,
})

gsap.to(myProjects3Img, 1, {
    scrollTrigger : myProjects3Btn,
    x: -90,
})

// Fourth Project

gsap.to(myProjects4, 1, {
    scrollTrigger : myProjects4,
    x: -50,
})

gsap.to(myProjects4Btn, 1, {
    scrollTrigger : myProjects4,
    x: -50,
})

gsap.to(myProjects4Img, 1, {
    scrollTrigger : myProjects4Btn,
    x: 130,
})

// Footer
gsap.fromTo(myMail, 3, {opacity: 0, scrollTrigger : myMail,y: -60,},
    {opacity: 1,scrollTrigger : myMail, y:00})

gsap.fromTo(folio,5, {scrollTrigger: folio, opacity:0}, {scrollTrigger: folio, opacity:1})


// ScrollBar name changement
function changeName(){
    let scrollBarHome = document.querySelector(".scroll-bar-home")
    let scrollBarAbout = document.querySelector(".scroll-bar-about")
    let scrollBarProjects = document.querySelector(".scroll-bar-projects")
    let scrollBarContact = document.querySelector(".scroll-bar-contact")

    let result = rootElement.scrollHeight - rootElement.clientHeight
    let finalResult = rootElement.scrollTop / result + 1

    if(finalResult >= 1 && finalResult <= 1.050){
        scrollBarHome.style.display = "block"
        scrollBarAbout.style.display = "none"
        scrollBarProjects.style.display = "none"
        scrollBarContact.style.display = "none"
    }
    else if (finalResult >= 1.051 && finalResult <= 1.150){
        scrollBarHome.style.display = "none"
        scrollBarAbout.style.display = "block"
        scrollBarProjects.style.display = "none"
        scrollBarContact.style.display = "none"
    }
    else if (finalResult >= 1.151 && finalResult <= 1.890){
        scrollBarHome.style.display = "none"
        scrollBarAbout.style.display = "none"
        scrollBarProjects.style.display = "block"
        scrollBarContact.style.display = "none"
    }
    else if(finalResult >= 1.891){
        scrollBarHome.style.display = "none"
        scrollBarAbout.style.display = "none"
        scrollBarProjects.style.display = "none"
        scrollBarContact.style.display = "block"
    }
}

document.addEventListener("scroll", changeName);