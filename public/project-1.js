// Custom cursor
const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", function(e){
    cursor.setAttribute("style", "top: "+ (e.pageY -10) + "px; left: "+ (e.pageX-10) + "px")
})

document.addEventListener("click", function(){
    cursor.classList.add("expand")

    setTimeout(() => {
        cursor.classList.remove("expand")
    }, 500);
})
