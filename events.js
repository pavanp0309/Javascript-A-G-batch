// event : an action (click a button ,searching ,loading a page addtocart resizing ) performed on html elements in webpage

// Different types of events 
// MouseEvents :  onclick ondblClick onmouseover onmouseleave onmouseEnter etc 
// KeyboardEvent : keypress keyup keydown  etc 
// formevents : onsubmit onfocus onchange  etc
// browserEvents :onload onresize ondocumnetContentLoad etc 


// different ways to add events to html 
// 1.directly adding events throgh Html Attributes 
// 2.adding through dom objects 
// 3.adding through addeventListeners

// Terminolgies 
// EventHandler : are the functions which excutes the piece of code  when a particular event occurs 
// EventListener:it listenes to paricular event when an event is fired 



// EventHandler 
// 1stway
function addtocart(){
  alert("do u want me to add an item")
}
function addtocart1(){
    alert("item is added ")
  }

//   2nd way 
  let idele=document.getElementById('id1')

//   arrow function
  idele.onclick=()=>{console.log("hello")}
//   anonomous function
  idele.onclick=function(){
    console.log("hello✔📌😜")
  }

//   named functiom
idele.onclick=addtocart1

// 3rd way 
// addEventListener("event",function)
let idele1=document.getElementById('id2')
// idele1.addEventListener("click",()=>{console.log("hello")})
// idele1.addEventListener("click",function(){
//     console.log("hello✔📌😜")
//   })
//   idele1.addEventListener("click",addtocart1)

// let idele3=document.getElementById('id3')
// idele3.addEventListener("focus",()=>{
//     console.log("hello")
// })


// eventObject : e ,event
idele1.addEventListener("click",(event)=>{
    console.log(event.target.style.color="red")
})

// eventProgration eventBubling eventcapturing 
let parent=document.querySelector('.parent')
let child=document.querySelector('.child')
let btnele=document.querySelector('.btn')
let btnele1=document.querySelector('.btn1')

parent.addEventListener("click",(e)=>{
    console.log("parent")
    // e.stopPropagation()
    e.stopImmediatePropagation()
},{capture:true})
parent.addEventListener("click",()=>{
    console.log("parent")
},{capture:true})

child.addEventListener("click",()=>{
    console.log("child👨‍🔬👼")
},{capture:true})
btnele.addEventListener("click",()=>{
    console.log("btn🎉🎉")
},{capture:true})
btnele1.addEventListener("click",()=>{
    console.log("btn😜😜")
})

// to handle events efficently we use eventDelagation 
let ullist=document.querySelector('.ullist')
ullist.addEventListener("click",(e)=>{
   e.target.classList.toggle("c2")
})