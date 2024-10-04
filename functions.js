// functions are the building blocks of any web apps  
// : dont repeat yourself  : we write once and use as many number times we require
// (reuseability ),cleaner-code,optimization,performance 
// different types function 
//     🏹built-function :prompt(),alert(),confirm() etc .
//        🏹userbulit in function 
                //  1.Named Functions 
                //  2.arrow functions 
                //  3.anonoumous functions ,(function-expressions)
                //  4.iife(immediately invoked function expression)
                //  5 .generator functions 

// User-defined functions: These are functions created by the programmer to perform specific tasks
// Built-in functions: These are functions created default by JavaScript itself for immediate use.

// 1.Formal Arguments: Formal arguments, also known as parameters, are placeholders
// specified in the function declaration that define the input values expected by the function.
// 2. Actual Arguments: Actual arguments, also known as arguments or
// Function arguments are the values that are passed to a function when calling it.

function Add(a){
    console.log("hello",a)
    console.log("hello")
    console.log("hello")
    console.log("hello")
}

// calling the functions
// Add("ravi")
// Add()
// Add("vishwas")



// default parameters ,rest parameters   : es6
// function bookmyshow(movie,ticket){ //parameters,params,formal parameters
//     console.log(movie,'ticket is booked seat:',ticket )
// }

// // bookmyshow("RRR","C16") // actual argumnets 
// // bookmyshow("kalki","C17")

// // default parameters before ES6
// function bookmyshow1(movie,ticket){ //parameters,params,formal parameters
//     if(movie==undefined){
//         movie="no-selected"
//     }
//     console.log(movie,'ticket is booked seat:',ticket )
// }

// bookmyshow1() // ravi
// bookmyshow1("vishwas","C16") // vishwas

// // default parameters after ES6

// function bookmyshow2(movie="no-movie-selected",ticket="no-seat-selcted"){ //parameters,params,formal parameters
//     console.log(movie,'ticket is booked seat:',ticket )
// }

// bookmyshow2() // ravi
// bookmyshow2("RRR","C16") // vishwas


// REST Parameters
// problem
// function bookmyshow3(movie="no-movie-selected",ticket="no-seat-selcted",theater,loc,tax){ //parameters,params,formal parameters
//     console.log(movie,'ticket is booked seat:',ticket,loc,theater )
// }

// bookmyshow3() // ravi
// bookmyshow3("RRR","C16") // vishwas

// REST PARAMETERS : ...rest
// function bookmyshow4(movie="no-movie-selected",ticket="no-seat-selcted",...rest){ //parameters,params,formal parameters
//     console.log(movie,'ticket is booked seat:',ticket,rest )
// }

// bookmyshow4() // ravi
// bookmyshow4("RRR","C16","kphb","arjun",1500) // vishwas


// function bookmyshow5(t1,t2){
//    return t1+t2
// }
// let res=bookmyshow5(100,500)
// console.log(res+50)

// one function passed as argumnet to another functions and returned as a value those function are called higher-order-function /callback functions
// function data(a,b){
//    console.log("data function")
//   a() //callback functions
//   b()
// }

// function data1(){
//     console.log("data1 function")
// }

// data(data1,function data2(){console.log("doubt")})


// QA 
// 1.what are functions  ?explain the different types of functions
// 2.[r]what are higher-order-functions?
// 3.[r]what is scope and scope-chain in js 
// 4.[r]write the difference b/w arrow functions and normal functions?
// 5.explain the defference b/w default and rest parameters ?
// 6.[r] explain These keyword in js


// this keyword
// difference b/w arrow functions and normal functions
// function expression ,iffe functions ,
// methods: call apply and bind 

// this keyword points to object location based on context it is called

// console.log(this) // globalscope-window

// function Data(){
//     console.log(this) // function-scope-window
// }
// Data()


// let a={
//     name:"ramu",
//     age:24,
//     // method-cureent object
//     deatils:function(){
//         console.log(this.name)}

// }

// constructor functions 
// function Person(name,age,about){
//      this.name=name
//      this.age=age
//      this.about=about
// }
// let ravi=new Person("ravi",24,"good boy")
// console.log(ravi)

// call apply and bind methods in js 
// it is used to change the this reference 
// In JavaScript, call(), apply(), and bind() are methods that allow you to control the value of this (the execution context) within a function. 

var salary=10000
let raju={
    salary:1000
}
let ramu={
    salary:1000
}
let vishwas={
    salary:2000000
}
function exampleda(name,c){
    
    console.log(this.salary,name,c)
}

exampleda.call(vishwas,"vishwas")
exampleda.call(ramu,"ramu","tcs")
exampleda.call(raju,"raju")
exampleda.apply(vishwas,["vishwas","google"])
let a=exampleda.bind(ramu,"ramu")
console.log(a())
// // calling the method
// a.deatils()

// // anonoumous function  function with name we call anonomous 
//  var a1=function (a){
//          console.log("😂😁😀",a)
//          return a

//  }

// //  called with variable names
// let res=a1(2)*3
// console.log(res)
// // Defference b/w arrow and normal functions 

// // arrow function are syntatic sugar of named function 
// // syntax: let data=()=>{}

// // 1.arrow function doesnt req paranthesis when single parameters is passed ;
// // 1.arrow function doesnt req curlybraces-{} when single statements is passed ;
// // arrow function has implicit return statetment
// // eg:
// let data=a=>a*4
// let res1=data(2)*4
// console.log(res1)

// // arrow function width multiple params and statements requires the () & {}

// let a3=(a,b)=>{
//     return a*b
// }

// let res6=a3(2,4)
// console.log(res6)

// arrow functions doest have its own these binding and it should not be used as methods 

// IFFE  Immediately invoked function expression 
// let data1=(function(){
//     console.log("hello")}())

//     var a=10
   
// var data= (function(){var a=20}())

//     {
//       (function(){var a=20}())
//     }
// console.log(a)





// Hoisting in function 
// moving all declaration to top of there scope 
// Hoisted: Named functions are hoisted, meaning you can call them before they are declared in your code.
// Not Hoisted: Arrow functions are not hoisted. They behave like variables declared with let or const. You cannot call them before they are declared in your code.

Hoistda()
function Hoistda(){
  console.log("hello")
}

console.log(a1())
var a1=()=>{console.log("hello")}