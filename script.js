let button = document.querySelector("button");
let predict = document.querySelector(".prediction");
let moved=false

button.addEventListener("mouseover", function() {
    if(!moved){
    button.style.marginLeft = "200px"
    moved=true
    }else{
        button.style.marginLeft = "0px"
        moved=false
    }

})
setTimeout(function() {
    button.style.display = "none"
    predict.innerText = "I predict you will be poiuytrea"
}, 6000)