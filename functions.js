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
function bookmyshow4(movie="no-movie-selected",ticket="no-seat-selcted",...rest){ //parameters,params,formal parameters
    console.log(movie,'ticket is booked seat:',ticket,rest )
}

// bookmyshow4() // ravi
// bookmyshow4("RRR","C16","kphb","arjun",1500) // vishwas


// function bookmyshow5(t1,t2){
//    return t1+t2
// }
// let res=bookmyshow5(100,500)
// console.log(res+50)

// one function passed as argumnet to another functions and returned as a value those function are called higher-order-function /callback functions
function data(a,b){
   console.log("data function")
  a() //callback functions
  b()
}

function data1(){
    console.log("data1 function")
}

data(data1,function data2(){console.log("doubt")})


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






