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
const textCursor = document.querySelector(".textCursor")

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

document.addEventListener("mousemove", function(e){

    let x = e.pageX;
    let y = e.pageY

    textCursor.setAttribute("style", "top: " + (y-75) + "px; left: " + (x-5) + "px")

})


// Animation cursor on my email
const mail = document.querySelector(".myEmail")

mail.addEventListener("mouseenter", function(){
        cursor.classList.add("cursorMail")
        cursorCenter.classList.remove("cursorCenter")
    })

mail.addEventListener("mouseleave", function(){
    cursor.classList.remove("cursorMail")
    cursorCenter.classList.add("cursorCenter")
})

// Animation cursor on button to the top
const toTheTop = document.querySelector(".backToTheTop")

toTheTop.addEventListener("mouseenter", function(){
    cursor.classList.add("cursorMail")
    cursorCenter.classList.remove("cursorCenter")
})
toTheTop.addEventListener("mouseleave", function(){
    cursor.classList.remove("cursorMail")
    cursorCenter.classList.add("cursorCenter")
})

// Animation cursor on social link
const socialLink = document.querySelectorAll(".social-link")

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

// Animation cursor on project
const linkProject = document.querySelectorAll(".link-project")

for (let i = 0; i < linkProject.length; i++) {
    linkProject[i].addEventListener("mouseenter", function(){
        cursor.classList.add("cursorMail")
        cursorCenter.classList.remove("cursorCenter")
        textCursor.setAttribute("class", "cursorExplore")
        console.log(textCursor)
    });
}

for (let i = 0; i < linkProject.length; i++) {
    linkProject[i].addEventListener("mouseleave", function(){
        cursor.classList.remove("cursorMail")
        cursorCenter.classList.add("cursorCenter")
        textCursor.setAttribute("class", "textCursor")
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

const firstName = document.querySelector(".myName")
const mainTitle = document.querySelector(".title-first-container")
const mainText = document.querySelector(".text-first-container")

const secondTitle = document.querySelector(".title-second-container")
const secondText = document.querySelector(".mySecondText")

const myProjects1 = document.querySelector(".first-title-project")
const myProjects1Img = document.querySelector(".mockup-img1")

const myProjects2 = document.querySelector(".second-title-project")
const myProjects2Img = document.querySelector(".mockup-img2")

const myProjects3 = document.querySelector(".third-title-project")
const myProjects3Img = document.querySelector(".mockup-img3")

const myProjects4 = document.querySelector(".fourth-title-project")
const myProjects4Img = document.querySelector(".mockup-img4")

const myProjects5 = document.querySelector(".fifth-title-project")
const myProjects5Img = document.querySelector(".mockup-img5")

const myMail = document.querySelector(".myEmail")
const folio = document.querySelector(".folio")


gsap.fromTo(firstName,2,{opacity:0, x:-50}, {opacity:1, x:0})
gsap.fromTo(mainTitle,2,{opacity:0, x:50}, {opacity:1, x:0})
gsap.fromTo(mainText, 2, {opacity:0, x:50}, {opacity:1, x:0})


gsap.to(secondTitle, 2,{scrollTrigger: secondTitle, y:-40})


gsap.to(secondText, 2,{scrollTrigger: secondText, y:-40})



// First project
gsap.to(myProjects1, 1, {
    scrollTrigger : myProjects1,
    x: 50
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

gsap.to(myProjects2Img, 1, {
    scrollTrigger : myProjects2Img,
    x: 40,
})

// Third Project
gsap.to(myProjects3, 1, {
    scrollTrigger : myProjects3,
    x: 50,
})

gsap.to(myProjects3Img, 1, {
    scrollTrigger : myProjects3Img,
    x: -90,
})

// Fourth Project

gsap.to(myProjects4, 1, {
    scrollTrigger : myProjects4,
    x: -50,
})

gsap.to(myProjects4Img, 1, {
    scrollTrigger : myProjects4Img,
    x: 130,
})

// Fifth project
gsap.to(myProjects5, 1, {
    scrollTrigger : myProjects5,
    x: 50
})

gsap.to(myProjects5Img, 1, {
    scrollTrigger : myProjects5Img,
    x: -90,
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