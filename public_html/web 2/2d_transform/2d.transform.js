// 2d_transform.js

console.log('2d_transform.js loaded');

//create a selector
 let sleepy = document.querySelector("#sleepy");

 sleepy.addEventListener('click', function(event){
    //console.log(this.id);
    this.classList.toggle('move-right');
 })