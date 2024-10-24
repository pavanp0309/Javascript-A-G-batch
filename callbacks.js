// Single Thereaded and synchronous languages

// synchronous language  : one after the Other ,line by line
// To make js asynchronous  we use webapis like setTimeout setInterval

//  the function are excuted on how they are called not how they are defined
// one function passed as an argument to another function and return as value those functions are called callback functions

// synchronous

// function A (c){
//     console.log("hello")
//     document.write("hello-😜<Br/>")
//     c()
// }

// function B (){
//     console.log("Bye")
//     document.write("Bye-😜👋<Br/>")
// }

// // A (B)
// // debugger
// console.log("hello")
// setTimeout(B,0)
// console.log("hello1")

// // CallBack hell : the Pyramid doom Structure of nested callbacks is called callbackhell

// setTimeout(()=>{
//     console.log("add an item to cart")
//     setTimeout(()=>{
//         console.log("fill the address")
//         setTimeout(()=>{
//             console.log("make the Payment")
//             setTimeout(() => {
//                 console.log("order-placed ")
//                 setTimeout(()=>{
//                     console.log("ready of delivery")
//                     setTimeout(()=>{
//                         console.log("delivered🎉")
//                     },1000)
//                 },2000)
//             }, 3000);
//         },4000)
//     },5000)
// },6000)

// PROMISE
//  states of promises
//  Pending
//  resolved /fullfilled state
// rejected state

let p1 = new Promise((res, rej) => {
  res(2);
  // rej()
})
  .then((a) => {
    console.log(a);
    return a * 2;
  })
  .then((b) => {
    console.log(b);
    return b * 2;
  })
  .then((c) => {
    console.log(c);
    return c * 3;
  })
  .catch((d) => {
    console.log(d);
  });
console.log(p1);
