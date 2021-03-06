let app = {
  cursor: document.querySelector(".cursor"),
  cursorCenter: document.querySelector(".cursorCenter"),
  socialButton: document.querySelectorAll(".myFooterButton"),

  mouseCursor: () => {
    document.addEventListener("mousemove", function (e) {
      let x = e.pageX;
      let y = e.pageY;
      app.cursor.setAttribute(
        "style",
        "top: " + (y - 15) + "px; left: " + (x - 15) + "px"
      );
    });
    document.addEventListener("mousemove", function (a) {
      let c = a.pageX;
      let b = a.pageY;
      app.cursorCenter.setAttribute(
        "style",
        "top: " + (b - 3) + "px; left: " + (c - 3) + "px"
      );
    });
  },
  hamburgerMenu: () => {
    const burger = document.querySelector(".hamburger");
    const myBody = document.querySelector("body");
    const myNav = document.querySelector("nav");

    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      myNav.classList.toggle("nav--open");
      myBody.classList.toggle("menu--open");
    });
  },
  effectsOnMenu: () => {
    let elems = [
      "home",
      "project1",
      "project2",
      "project3",
      "project4",
      "project5",
    ];
    let links = ["line1", "line2", "line3", "line4", "line5", "line6"];

    for (let i = 0; i < elems.length; i++) {
      let link = document.getElementById(elems[i]);
      let line = document.getElementById(links[i]);

      link.addEventListener("mouseover", () => {
        line.style.transform = "scaleX(1)";
        link.addEventListener("mouseleave", () => {
          line.style.transform = "scaleX(0)";
        });
      });
    }
  },
  socialLink: () => {
    for (let i = 0; i < app.socialButton.length; i++) {
      app.socialButton[i].addEventListener("mouseenter", () => {
        app.cursor.classList.add("transparent");
        app.cursorCenter.classList.remove("cursorCenter");
        app.socialButton[i].addEventListener("mouseleave", () => {
          app.cursor.classList.remove("transparent");
          app.cursorCenter.classList.add("cursorCenter");
        });
      });
    }
  },
  init: () => {
    app.mouseCursor(),
      app.effectsOnMenu(),
      app.hamburgerMenu(),
      app.socialLink();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
