<<<<<<< HEAD
// conditional statements controls the flow of excution of code based condtions is true and false
// different types of conditional statements

// 1.if codition
// 2.if-else
// 3.else-if ladder
// 4.switch-case
// 5.nested if

// if(codition){
//     // these part will be evalutated if the condition is true
//     console.log("eligible")
// }

// if(codition){
//     // these part will be excuted if the condition is true
//     console.log("eligible")
// }else {
//     // these part will be excuted if the condition is false
// }

// if(codition){
//     // these part will be excuted if the condition is true
//     console.log("eligible")
// }else if(codition){
//     // these part will be excuted if the condition1 is false and codition 2 true
// }else if(codition){
// // these part will be excuted if the condition1 is false and codition 2 false and codition 3 true
// }else{
// //   these  part will be excuted if all condition fails
// }

// if(condition){
//     // nested if -if-inside if
//     if(codition){

//     }
// }

// let username="rajubhai"
// let mobile=7995524942

// if((username=="raju"&&mobile==7995524942)){
//       console.log("successfully logged in")
// }else{
// console.log("failed to login username and mobile number are wrong")
// }

// let no=-5
// if(no>0){

//     console.log("positive")
// }else{
// console.log("negative")
// }

// // nested if
// let number=5

// if(number>0){
//     if(number%2===0){

//         console.log("even no")
//     }
//     console.log("positive")

// }else{
// console.log("negative")
// }

// else-if ladder
let grade;
let marks = 40;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80 && marks < 90) {
  grade = "B";
} else if (marks >= 60 && marks < 80) {
  grade = "c";
} else if (marks >= 40 && marks < 60) {
  grade = "d";
} else if (marks >= 30 && marks < 40) {
  grade = "e";
} else {
  grade = "fail";
}
console.log(grade);

// switch (condition) {
//     case value:

//         break;

//     default:
//         break;
// }

let selected;
let item 
let item_variant="panner-veg-masala-birayani"

switch (item) {
  case "vegbirayani":
    selected = "vegitem-pulav";
    break;
  case "muttonbirayani":
    selected = "muttton-fry-piece birayani";
    break;
  case "chickenbirayani":
    selected = "dum birayani";
    break;
  case "pannerbirayani":
      if(item_variant == "panner-veg-masala-birayani"){
         selected="curd"+"panner"+"extra cheese"
      }
      console.log("panner-items")
      break;
  default:
    selected="please select an item"
    break;
}

console.log(selected)


=======
// conditional statements controls the flow of excution of code based condtions is true and false
// different types of conditional statements

// 1.if codition
// 2.if-else
// 3.else-if ladder
// 4.switch-case
// 5.nested if

// if(codition){
//     // these part will be evalutated if the condition is true
//     console.log("eligible")
// }

// if(codition){
//     // these part will be excuted if the condition is true
//     console.log("eligible")
// }else {
//     // these part will be excuted if the condition is false
// }

// if(codition){
//     // these part will be excuted if the condition is true
//     console.log("eligible")
// }else if(codition){
//     // these part will be excuted if the condition1 is false and codition 2 true
// }else if(codition){
// // these part will be excuted if the condition1 is false and codition 2 false and codition 3 true
// }else{
// //   these  part will be excuted if all condition fails
// }

// if(condition){
//     // nested if -if-inside if
//     if(codition){

//     }
// }

// let username="rajubhai"
// let mobile=7995524942

// if((username=="raju"&&mobile==7995524942)){
//       console.log("successfully logged in")
// }else{
// console.log("failed to login username and mobile number are wrong")
// }

// let no=-5
// if(no>0){

//     console.log("positive")
// }else{
// console.log("negative")
// }

// // nested if
// let number=5

// if(number>0){
//     if(number%2===0){

//         console.log("even no")
//     }
//     console.log("positive")

// }else{
// console.log("negative")
// }

// else-if ladder
let grade;
let marks = 40;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80 && marks < 90) {
  grade = "B";
} else if (marks >= 60 && marks < 80) {
  grade = "c";
} else if (marks >= 40 && marks < 60) {
  grade = "d";
} else if (marks >= 30 && marks < 40) {
  grade = "e";
} else {
  grade = "fail";
}
console.log(grade);

// switch (condition) {
//     case value:

//         break;

//     default:
//         break;
// }

let selected;
let item 
let item_variant="panner-veg-masala-birayani"

switch (item) {
  case "vegbirayani":
    selected = "vegitem-pulav";
    break;
  case "muttonbirayani":
    selected = "muttton-fry-piece birayani";
    break;
  case "chickenbirayani":
    selected = "dum birayani";
    break;
  case "pannerbirayani":
      if(item_variant == "panner-veg-masala-birayani"){
         selected="curd"+"panner"+"extra cheese"
      }
      console.log("panner-items")
      break;
  default:
    selected="please select an item"
    break;
}

console.log(selected)


>>>>>>> bcd3b6d (dom)
