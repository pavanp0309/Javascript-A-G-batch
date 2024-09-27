// Variables :  is a container which store different kind of datatypes/values
// datatypes : are values (string,number ,boolean ,object,arrays,functions etc...)

// 🎯Different way to decalare the variables
//    1.using the Var Keyword (from start of js )
//    2.using the let keyword ---> ES6
//    3.using the const keyword ---> ES6
//    4.using the nothing (no-keyword)

// RULES TO DECLARE THE VARIABLES NAMES / IDENTIFIERS
//  it==>means identifier/variable
// 1.it should not start with numbers and special characters expect $ and _ (underscore)
// ex:
// var 2d=10 //An identifier or keyword cannot immediately follow a numeric literal
// var d=10 // correct
// // var @d=10 //error
// var $d=10 //correct
// var _d=10 //correct

// 2. it should contain any reserved keyword (inbuilt keyword)
// ex: for if let const while function var  ---reserved keyword

//   var for=10 //for' is not allowed as a variable declaration name.
//  var viwas=10 // correct

// 3.it should not contain any whitespeace
// var h a=10 // wrong way
//   var h_a=10 // correct way

// 😎TERMINOLGY😎

// DECLARATION :Creating a variable in JavaScript is called "declaring" a variable
// eg :
//    var a;
//    let b;

// REDECLARATION :re-declaration refers to declaring a variable with the same name more than once.
//   eg :
//   var c;            let d;
//   var c;            let d;
// INITIALIZATION : initialization refers to the process of assigning an initial value to a variable when it is declared.(storing the value)
// eg:
//    var a=10
//    let b="hello"
//    const c=true

// SCOPE : lifetime of variable (Scope determines the accessibility of variables,objects etc within the code )

//  DIFFERENT TYPES OF SCOPE
//  Global Scope :
// local scope :
// block scope --->{ }
// function scope  ---> function data(){ }
// module scope :  a piece of files eg: script.js  variable.js etc

// DIFFERENCES  var let const

// DECLARATION

//    var a;
//    let b;
//    const c; //SyntaxError: Missing initializer in const declaration
//'const' declarations must be initialized.
// sol:
// const c1=10

// 🎯REDECLARATION
//  var a1=10
//  let b1=20
//  const c1=30

//  redecalaring
// var a1=10
// let b1=20 //SyntaxError: Identifier 'b1' has already been declared
// const c1=30 //SyntaxError: Identifier 'c1' has already been declared

//  console.log("a1:",a1)
//  console.log("b1:",b1)
//  console.log("c1:",c1)

//  redeclartion is not possible in let and const in the same scope but it is possible in different scope
// eg: global scope
// var a1 = 20;
// let b1 = 30;
// const c1 = 30;
// console.log("a1:", a1);
// console.log("b1:", b1);
// console.log("c1:", c1);

//  not possible in same scope
//  var a1=10
//  let b1=20
//  const c1=30

// eg: block scope : possible in different scope
// {
//   var a1 = 10;
//   let b1 = 20;
//   const c1 = 30;
//   console.log("a1:", a1);
//   console.log("b1:", b1);
//   console.log("c1:", c1);
// }
// // eg: function scope
// function example() {
//   var a1 = "rajaa";
//   let b1 = "ramuu";
//   const c1 = true;
//   console.log("a1:", a1);
//   console.log("b1:", b1);
//   console.log("c1:", c1);
// }
// example();




// Scope : 

// globalscope: we can access everywhere within the code


// global-scope
// var name1="lion"
// let name2="lion-daughter"
// const name3="lion-son"

// // console.log("global 🦁-adda")
// // console.log("g:",name1)
// // console.log("g:",name2)
// // console.log("g:",name3)

// // block 
// {
//   console.log("🦁inside the block🦁")
//   console.log("g:",name1)
//   console.log("g:",name2)
//   console.log("g:",name3)
// }


// // function scope 

// function den(){
//   console.log("🦁inside the function🦁")
//   console.log("g:",name1)
//   console.log("g:",name2)
//   console.log("g:",name3)
// }

// den()
// what is HOisting in js 


// block scope 
//  {
//   var name1="lion"
//   let name2="lion-daughter"
//   const name3="lion-son"
//   console.log("b:",name1)
//   console.log("b:",name2)
//   console.log("b :",name3)
//  }
//  console.log(".....🦁🦁.....outside-block")
//  console.log("b:",name1)
// //  console.log("b:",name2)Uncaught ReferenceError: name2 is not defined
//  console.log("b:",name3)//Uncaught ReferenceError: name3 is not defined


//  function zoo(){
//   console.log(".....🦁🦁.....inside-function")
//   console.log("b:",name1)
//  }
//  zoo()

//  function scoped 
// function PrivateZoo(){
//   var a="child1"
//   let b="child2"
//   const c="child3"
//     console.log("f:",a)
//   console.log("f:",b)
//   console.log("f :",c)
// }
// // console.log("f:",a) //variables.js:186 Uncaught ReferenceError: a is not defined
// console.log("f:",b) //variables.js:186 Uncaught ReferenceError: b is not defined

// PrivateZoo()


// points  :
//  var ,let can be decalared ,const must initialized
// var can be redeclared let and const cant be redeclared in same scope
//  var is global and function scoped variable
//  let const are block scoped variables
// we can access the values before decalaration in var keyword which not posssibe in let and const
    //  😎not posssibe in let and const :but they are not initialized until the code execution reaches their declaration 
                              // it is stored in tdz 



// Hoisting :moving all the decalaration(creating a variable ,function ,objects ) to top of there scope 

// debugger
// console.log(a) // undefined
// var a=10
// console.log(a) //10

// debugger; : varaibles decalared with let and const are stored in seprate meomory called (tdz:temporal deadzone)
// when we try to access the varibales from tdz it throughs ReferenceError 


// temporal dead zone (TDZ), which is a state where the variable exists but remains uninitialized. 
// console.log(b)  //Cannot access 'b' before initialization

// {
//   debugger
//   let b=10
// console.log(b)
// } //10



