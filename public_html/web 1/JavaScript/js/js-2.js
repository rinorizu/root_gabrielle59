onsole.log("JS 2 in action")

//Step 1 - Selecting the element
const myShape = document.getElementById("diamond")

//Step 2 - adding a click event
//myShape.addEventListener("click", function (){
myShape.addEventListener("click", function ()  {
    myShape.style.borderColor = "purple"
    myShape.classList.toggle("change-me");
})