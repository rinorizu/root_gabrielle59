console.log("loaded 🫧")

const stage = document.querySelector("body");
const topHat = document.getElementById("topHat");

//sound
const topSound = new Audio("sounds/funny-cat-meow-246012.mp3");

topHat.onclick = function()
{
    this.classList.toggle("move");
    topSound.play();
}

stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY);
    //tophat.style.transform = "translateX("+ event.clientX +"px) translateY("+  event.clientY +"px);

    topHat.style.transform = `translateX(${event.clientX-100}px) translateY(${event.clientY-92}px)`;
    })

    // Keyboard input
    document.onkeydown = checkKeys;

    function checkKeys(event) {
    
        var style = window.getComputedStyle(topHat);
        var matrix = new WebKitCSSMatrix(style.transform);
        var xVal = matrix.m41;
        var yVal = matrix.m42;    
        var coords;
    
        //left arrow
        if(event.keyCode == "37") {
            coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
            topHat.style.transform = coords;
        }
        //right arrow
        if(event.keyCode == "39") {
            coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
            topHat.style.transform = coords;
        }
        //up arrow
        if(event.keyCode == "38") {
            coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
            topHat.style.transform = coords;
        }
        //down arrow
        if(event.keyCode == "40") {
            coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
            topHat.style.transform = coords;
        }
    
    
    
    }

    function addMyObject (){
    /* Custom Object */

    let myObject = document.createElement("img");
    myObject.src = "img/SirFishy.svg";
    myObject.style.width = "100px"
    stage.append(myObject);

    let w = window.innerWidth - 100;
    let randomX = Math.floor((Math.random() * w) + 1);
    let h = window.innerHeight - 58;
    let randomY = Math.floor((Math.random() * h) + 1);

    myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;

    setTimeout(() => {myObject.remove(); addMyObject()}, 4000);
    }
addMyObject();