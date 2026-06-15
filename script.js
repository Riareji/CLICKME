let button = document.querySelector("button");
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