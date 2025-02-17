let isClick = false;
let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener('click',function(){
    if(isClick)
        hamburger.classList.remove("active");
    else
        hamburger.classList.add("active");
    isClick = !isClick;
})