gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

let app = {
    buttonScrollTop : document.querySelector(".buttonScroll"),
    buttonScrollTop2 : document.querySelector(".topButtonScroll"),
    rootElement : document.documentElement,
    cursor : document.querySelector(".cursor"),
    cursorCenter : document.querySelector(".cursorCenter"),
    textCursor : document.querySelector(".textCursor"),
    mail : document.querySelector(".myEmail"),
    toTheTop : document.querySelector(".backToTheTop"),
    socialLink : document.querySelectorAll(".social-link"),
    linkProject : document.querySelectorAll(".link-project"),

    handleTop : () =>{
        document.addEventListener("scroll", function(){
            let result = app.rootElement.scrollHeight - app.rootElement.clientHeight

            if((app.rootElement.scrollTop / result) > 0.82){
                app.buttonScrollTop.classList.add("showBtn")
                app.buttonScrollTop2.classList.add("showBtn")
            } else{
                app.buttonScrollTop.classList.remove("showBtn")
                app.buttonScrollTop2.classList.remove("showBtn")
            }
        })
    },
    backToTheTop : () =>{
       app.buttonScrollTop.addEventListener("click", ()=>{
            app.rootElement.scrollTo({
                top : 0,
                behavior : "smooth"
            })
        })
    },
    changeNameParts : () =>{
        document.addEventListener("scroll", function(){
            let scrollBarHome = document.querySelector(".scroll-bar-home")
            let scrollBarAbout = document.querySelector(".scroll-bar-about")
            let scrollBarProjects = document.querySelector(".scroll-bar-projects")
            let scrollBarContact = document.querySelector(".scroll-bar-contact")
        
            let result = app.rootElement.scrollHeight - app.rootElement.clientHeight
            let finalResult = app.rootElement.scrollTop / result + 1
        
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
        });
    },
    mouseCursor: () =>{
        document.addEventListener("mousemove", function(e){
            let x = e.pageX;
            let y = e.pageY;
            app.cursor.setAttribute("style", "top: " + (y-15) + "px; left: " + (x-15) + "px");
        })
        document.addEventListener("mousemove", function(a){
            let c = a.pageX
            let b = a.pageY
            app.cursorCenter.setAttribute("style", "top: " + (b-3) + "px; left: " + (c-3) +"px")
        })
        document.addEventListener("mousemove", function(e){
            let x = e.pageX;
            let y = e.pageY;
            app.textCursor.setAttribute("style", "top: " + (y-75) + "px; left: " + (x-5) + "px")
        })
    },
    animationOnMail: () =>{
        app.mail.addEventListener("mouseenter", function(){
            app.cursor.classList.add("cursorMail")
            app.cursorCenter.classList.remove("cursorCenter")
        })
        app.mail.addEventListener("mouseleave", function(){
            app.cursor.classList.remove("cursorMail")
            app.cursorCenter.classList.add("cursorCenter")
    })
    },
    animationOnButtonToTheTop : () =>{
        app.toTheTop.addEventListener("mouseenter", function(){
            app.cursor.classList.add("cursorMail")
            app.cursorCenter.classList.remove("cursorCenter")
        })
        app.toTheTop.addEventListener("mouseleave", function(){
            app.cursor.classList.remove("cursorMail")
            app.cursorCenter.classList.add("cursorCenter")
        })
    },
    animationOnSocialLink : () =>{
        for (let i = 0; i < app.socialLink.length; i++) {
            app.socialLink[i].addEventListener("mouseenter", function(){
                app.cursor.classList.add("cursorMail")
                app.cursorCenter.classList.remove("cursorCenter")
            });
        }
        for (let i = 0; i < app.socialLink.length; i++) {
            app.socialLink[i].addEventListener("mouseleave", function(){
                app.cursor.classList.remove("cursorMail")
                app.cursorCenter.classList.add("cursorCenter")
            });
        }
    },
    animationOnProjects : () =>{
        for (let i = 0; i < app.linkProject.length; i++) {
            app.linkProject[i].addEventListener("mouseenter", function(){
                app.cursor.classList.add("cursorMail")
                app.cursorCenter.classList.remove("cursorCenter")
                app.textCursor.className = "cursorExplore"
            });
        }
        for (let i = 0; i < app.linkProject.length; i++) {
            app.linkProject[i].addEventListener("mouseleave", function(){
                app.cursor.classList.remove("cursorMail")
                app.cursorCenter.classList.add("cursorCenter")
                app.textCursor.className ="textCursor"
            });
        }
    },
    effectsOnCursor: () =>{
        document.addEventListener("click", function(){
            app.cursor.classList.add("expand")
        
            setTimeout(() => {
                app.cursor.classList.remove("expand")
            }, 500);
        })
        
        window.addEventListener("scroll",() =>{
              document.body.style.setProperty("--scroll",
                window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
              );
            },
            false
          );
    },
    gsapAnimation : function(){
        const firstName = document.querySelector(".myName")
        const mainTitle = document.querySelector(".title-first-container")
        const mainText = document.querySelector(".text-first-container")
        const firstBlock = document.querySelector(".bloc-container2-general")
        const secondTitle = document.querySelector(".title-second-container")
        const secondText = document.querySelector(".mySecondText")
        const slider = document.querySelector(".slider")
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

CustomEase.create("myEase", "M0,0 C0,0 -0.003,1.093 0.302,1.048 0.704,0.988 1,1 1,1 ")
gsap.fromTo(firstBlock,1.5, {opacity:0, x:800}, {opacity:1,x:0, ease:"myEase"})

gsap.fromTo(firstName,3,{opacity:0, x:-50}, {opacity:1, x:0, delay:2})
gsap.fromTo(mainTitle,3,{opacity:0, x:50}, {opacity:1, x:0, delay:1.5})
gsap.fromTo(mainText, 3, {opacity:0, x:50}, {opacity:1, x:0, delay:1.5})

gsap.to(secondTitle, 2,{scrollTrigger: secondTitle, y:-10})
gsap.to(slider,2, {scrollTrigger:secondTitle, height: 0})

gsap.to(secondText, 2,{scrollTrigger: secondText, y:-20})


gsap.to(myProjects1, 1, {
    scrollTrigger : myProjects1,
    x: 50
})
gsap.to(myProjects1Img, 1, {
    scrollTrigger : myProjects1Img,
    x: -90,
})


gsap.to(myProjects2, 1, {
    scrollTrigger: myProjects2,
    x: -50,
})
gsap.to(myProjects2Img, 1, {
    scrollTrigger : myProjects2Img,
    x: 40,
})


gsap.to(myProjects3, 1, {
    scrollTrigger : myProjects3,
    x: 50,
})
gsap.to(myProjects3Img, 1, {
    scrollTrigger : myProjects3Img,
    x: -90,
})


gsap.to(myProjects4, 1, {
    scrollTrigger : myProjects4,
    x: -50,
})
gsap.to(myProjects4Img, 1, {
    scrollTrigger : myProjects4Img,
    x: 130,
})


gsap.to(myProjects5, 1, {
    scrollTrigger : myProjects5,
    x: 50
})
gsap.to(myProjects5Img, 1, {
    scrollTrigger : myProjects5Img,
    x: -90,
})


gsap.fromTo(myMail, 3, {opacity: 0, scrollTrigger : myMail,y: -60,},
    {opacity: 1,scrollTrigger : myMail, y:00})
gsap.fromTo(folio,5, {scrollTrigger: folio, opacity:0}, {scrollTrigger: folio, opacity:1})
    },
    init: function(){
        app.handleTop(),
        app.backToTheTop(),
        app.animationOnButtonToTheTop(),
        app.mouseCursor(),
        app.animationOnMail(),
        app.animationOnSocialLink(),
        app.animationOnProjects(),
        app.effectsOnCursor(),
        app.changeNameParts(),
        app.gsapAnimation()
    },
}

app.init()
// let buttonScrollTop = document.querySelector(".buttonScroll")
// let buttonScrollTop2 = document.querySelector(".topButtonScroll")
// let rootElement = document.documentElement

// Function Add and Remove for button "back to the top"
// function handleTop(){
//     let result = rootElement.scrollHeight - rootElement.clientHeight

//     if((rootElement.scrollTop / result) > 0.82){
//         buttonScrollTop.classList.add("showBtn")
//         buttonScrollTop2.classList.add("showBtn")
//     } else{
//         buttonScrollTop.classList.remove("showBtn")
//         buttonScrollTop2.classList.remove("showBtn")
//     }
// }
// document.addEventListener("scroll", handleTop)

// Use button "back to the top" with scroll
// function backToTheTop(){
//     rootElement.scrollTo({
//         top : 0,
//         behavior : "smooth"
//     })
// }
// buttonScrollTop.addEventListener("click", backToTheTop)


// Mouvement of the button "back to the top"
// buttonScrollTop.addEventListener("mouseenter", function(){
//     document.querySelector(".buttonScroll").classList.add("buttonScrollMovement")
// });
// buttonScrollTop.addEventListener("mouseleave", function(){
//     document.querySelector(".buttonScroll").classList.remove("buttonScrollMovement")
// })

// Custom cursor params
// const cursor = document.querySelector(".cursor");
// const cursorCenter = document.querySelector(".cursorCenter")
// const textCursor = document.querySelector(".textCursor")

// Movements
// document.addEventListener("mousemove", function(e){

//     let x = e.pageX;
//     let y = e.pageY;


//     cursor.setAttribute("style", "top: " + (y-15) + "px; left: " + (x-15) + "px");
// })


// document.addEventListener("mousemove", function(a){
//     let c = a.pageX
//     let b = a.pageY

//     cursorCenter.setAttribute("style", "top: " + (b-3) + "px; left: " + (c-3) +"px")
// })

// document.addEventListener("mousemove", function(e){

//     let x = e.pageX;
//     let y = e.pageY

//     textCursor.setAttribute("style", "top: " + (y-75) + "px; left: " + (x-5) + "px")

// })


// Animation cursor on my email
// const mail = document.querySelector(".myEmail")

// mail.addEventListener("mouseenter", function(){
//         cursor.classList.add("cursorMail")
//         cursorCenter.classList.remove("cursorCenter")
//     })

// mail.addEventListener("mouseleave", function(){
//     cursor.classList.remove("cursorMail")
//     cursorCenter.classList.add("cursorCenter")
// })

// Animation cursor on button to the top
// const toTheTop = document.querySelector(".backToTheTop")

// toTheTop.addEventListener("mouseenter", function(){
//     cursor.classList.add("cursorMail")
//     cursorCenter.classList.remove("cursorCenter")
// })
// toTheTop.addEventListener("mouseleave", function(){
//     cursor.classList.remove("cursorMail")
//     cursorCenter.classList.add("cursorCenter")
// })

// Animation cursor on social link
// const socialLink = document.querySelectorAll(".social-link")

// for (let i = 0; i < socialLink.length; i++) {
//     socialLink[i].addEventListener("mouseenter", function(){
//         cursor.classList.add("cursorMail")
//         cursorCenter.classList.remove("cursorCenter")
//     });
// }

// for (let i = 0; i < socialLink.length; i++) {
//     socialLink[i].addEventListener("mouseleave", function(){
//         cursor.classList.remove("cursorMail")
//         cursorCenter.classList.add("cursorCenter")
//     });
// }

// Animation cursor on project
// const linkProject = document.querySelectorAll(".link-project")

// for (let i = 0; i < linkProject.length; i++) {
//     linkProject[i].addEventListener("mouseenter", function(){
//         cursor.classList.add("cursorMail")
//         cursorCenter.classList.remove("cursorCenter")
//         textCursor.className = "cursorExplore"
//     });
// }

// for (let i = 0; i < linkProject.length; i++) {
//     linkProject[i].addEventListener("mouseleave", function(){
//         cursor.classList.remove("cursorMail")
//         cursorCenter.classList.add("cursorCenter")
//         textCursor.className ="textCursor"
//     });
// }

// Animation on Click
// document.addEventListener("click", function(){
//     cursor.classList.add("expand")

//     setTimeout(() => {
//         cursor.classList.remove("expand")
//     }, 500);
// })

// window.addEventListener("scroll",() => {
//       document.body.style.setProperty("--scroll",
//         window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
//       );
//     },
//     false
//   );

// ScrollBar name changement
// function changeName(){
//     let scrollBarHome = document.querySelector(".scroll-bar-home")
//     let scrollBarAbout = document.querySelector(".scroll-bar-about")
//     let scrollBarProjects = document.querySelector(".scroll-bar-projects")
//     let scrollBarContact = document.querySelector(".scroll-bar-contact")

//     let result = rootElement.scrollHeight - rootElement.clientHeight
//     let finalResult = rootElement.scrollTop / result + 1

//     if(finalResult >= 1 && finalResult <= 1.050){
//         scrollBarHome.style.display = "block"
//         scrollBarAbout.style.display = "none"
//         scrollBarProjects.style.display = "none"
//         scrollBarContact.style.display = "none"
//     }
//     else if (finalResult >= 1.051 && finalResult <= 1.150){
//         scrollBarHome.style.display = "none"
//         scrollBarAbout.style.display = "block"
//         scrollBarProjects.style.display = "none"
//         scrollBarContact.style.display = "none"
//     }
//     else if (finalResult >= 1.151 && finalResult <= 1.890){
//         scrollBarHome.style.display = "none"
//         scrollBarAbout.style.display = "none"
//         scrollBarProjects.style.display = "block"
//         scrollBarContact.style.display = "none"
//     }
//     else if(finalResult >= 1.891){
//         scrollBarHome.style.display = "none"
//         scrollBarAbout.style.display = "none"
//         scrollBarProjects.style.display = "none"
//         scrollBarContact.style.display = "block"
//     }
// }

// document.addEventListener("scroll", changeName);


// Animation with GSAP 
// const firstName = document.querySelector(".myName")
// const mainTitle = document.querySelector(".title-first-container")
// const mainText = document.querySelector(".text-first-container")

// const firstBlock = document.querySelector(".bloc-container2-general")

// const secondTitle = document.querySelector(".title-second-container")
// const secondText = document.querySelector(".mySecondText")

// const slider = document.querySelector(".slider")

// const myProjects1 = document.querySelector(".first-title-project")
// const myProjects1Img = document.querySelector(".mockup-img1")

// const myProjects2 = document.querySelector(".second-title-project")
// const myProjects2Img = document.querySelector(".mockup-img2")

// const myProjects3 = document.querySelector(".third-title-project")
// const myProjects3Img = document.querySelector(".mockup-img3")

// const myProjects4 = document.querySelector(".fourth-title-project")
// const myProjects4Img = document.querySelector(".mockup-img4")

// const myProjects5 = document.querySelector(".fifth-title-project")
// const myProjects5Img = document.querySelector(".mockup-img5")

// const myMail = document.querySelector(".myEmail")
// const folio = document.querySelector(".folio")

// CustomEase.create("myEase", "M0,0 C0,0 -0.003,1.093 0.302,1.048 0.704,0.988 1,1 1,1 ")
// gsap.fromTo(firstBlock,1.5, {opacity:0, x:800}, {opacity:1,x:0, ease:"myEase"})

// gsap.fromTo(firstName,3,{opacity:0, x:-50}, {opacity:1, x:0, delay:2})
// gsap.fromTo(mainTitle,3,{opacity:0, x:50}, {opacity:1, x:0, delay:1.5})
// gsap.fromTo(mainText, 3, {opacity:0, x:50}, {opacity:1, x:0, delay:1.5})

// gsap.to(secondTitle, 2,{scrollTrigger: secondTitle, y:-10})
// gsap.to(slider,2, {scrollTrigger:secondTitle, height: 0})

// gsap.to(secondText, 2,{scrollTrigger: secondText, y:-20})


// gsap.to(myProjects1, 1, {
//     scrollTrigger : myProjects1,
//     x: 50
// })
// gsap.to(myProjects1Img, 1, {
//     scrollTrigger : myProjects1Img,
//     x: -90,
// })


// gsap.to(myProjects2, 1, {
//     scrollTrigger: myProjects2,
//     x: -50,
// })
// gsap.to(myProjects2Img, 1, {
//     scrollTrigger : myProjects2Img,
//     x: 40,
// })


// gsap.to(myProjects3, 1, {
//     scrollTrigger : myProjects3,
//     x: 50,
// })
// gsap.to(myProjects3Img, 1, {
//     scrollTrigger : myProjects3Img,
//     x: -90,
// })


// gsap.to(myProjects4, 1, {
//     scrollTrigger : myProjects4,
//     x: -50,
// })
// gsap.to(myProjects4Img, 1, {
//     scrollTrigger : myProjects4Img,
//     x: 130,
// })


// gsap.to(myProjects5, 1, {
//     scrollTrigger : myProjects5,
//     x: 50
// })
// gsap.to(myProjects5Img, 1, {
//     scrollTrigger : myProjects5Img,
//     x: -90,
// })


// gsap.fromTo(myMail, 3, {opacity: 0, scrollTrigger : myMail,y: -60,},
//     {opacity: 1,scrollTrigger : myMail, y:00})
// gsap.fromTo(folio,5, {scrollTrigger: folio, opacity:0}, {scrollTrigger: folio, opacity:1})

