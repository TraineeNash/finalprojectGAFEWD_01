
document.querySelector("#menu__toggle").addEventListener("click", function(e){
    let x = document.querySelector("#topnav")
    console.log(e)
    console.log(x.className)
    if (x.className === "container flex justify-content align-items"){
        x.className += " responsive";
    }
    else {
        x.className = "container flex justify-content align-items";
    }
})