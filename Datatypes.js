// Datatypes : means nothing but values 


// Different types of datatypes 
//    🎯Primitive-Datatypes : number ,string boolean ,null undefined ,bigint(es2021) symbol
//    🎯Non-Primitive-Datatypes : objects ,arrays ,functions etc ..


// Primitive: these are the Lowesr language implementation (doent have any properties or methods(actions ))
// Non-primtive : which consits of some properties and methods (actions)

// typeof operator :  which tells type of the data 

// number
// let a=10.00
// console.log(a)
// console.log(typeof a)

// string 

// ways we can create the string  
//🦾 using the string literal method  
        //  1.single quotes
        //  2.double quotes
        //  3.template literals(backticks ``)

// 🦾using the string Global keyword 
// 🦾using the New-Keyword 

// examples :
//   let da='rajubhai'
//   let da1="rajubhai-brother"
//    let da2=`rajubhai-brother2`
//   console.log(da)
//   console.log(typeof da) //string
//   console.log("da1",da1)
//   console.log(typeof da1)//string
//   console.log("da2",da2) 
//   console.log(typeof da2)//string

//   let da3=String("raju-bro")
//   console.log("da3",da3)
//   console.log(typeof da3) //string

//   let da4=new String("raju-bro") 
//   console.log("da4",da4)
//   console.log(typeof da4) // object

// let str="hello"
// let str1=`${str}worl
// d`
// console.log(str1)
// let str3=str+str1
// console.log(str3)

// let a=false
// console.log(a)
// console.log(typeof a)

// let b=null //(no-value)
// console.log(b)
// console.log(typeof b)

// let data; // value assigned at time of declartion to variable is undefined
// var a;
// console.log(data)
// console.log(typeof a)


// biginit
// let maxsafe=Number.MAX_SAFE_INTEGER
// console.log(maxsafe)
// let num=1n      //1st way of creating the bigint
// let num1=BigInt(10)      //1st way of creating the bigint
// console.log(typeof num) //bigint
// console.log(typeof num1) //bigint
// // console.log( num1 *2) //Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// console.log(num1+2n)

// // errors
// // le a; //Uncaught SyntaxError: Unexpected identifier 'a'
// // console.log(a) // ncaught ReferenceError: Cannot access 'a' before initialization
// let a;
// // let a; // Uncaught SyntaxError: Identifier 'a' has already been declared



// // Non-primitive datatypes
// // objects : it is real world entity which has some key value pairs (property and value)
// // 1.using the object literals -{}
// // 2.using the object.create method
// // 3.using the constructor function 
// // 4.using the class
// // 5.using the new keyword 

// // 1.
// let Mobile={
//         // properties:values // key:value
//    brand:"Apple",
//    op:"ios",
//    price:50000,
//    storage:"256gb",
//    colorS:["red","black","gray"],
//    extrafea:{
//           ram:"8gb",
//           rom:"6gb"
//    },
// //    method (action )
//  calling:function(){
//         alert("hello" +this.brand)
//  }
// }

// console.log( Mobile)
// // objects are named indexed
// // arayys are number indexed

// // different ways to access the object values
// // 1.
// console.log(Mobile.price)
// console.log(Mobile.brand)
// // acccessing the array inside object
// console.log(Mobile.colorS[0])
// // acccessing the object inside object
// console.log(Mobile.extrafea.ram)

// // 2
// console.log(Mobile["brand"])
// console.log(Mobile["extrafea"]["ram"])

// 3.
// console.log(Object.keys(Mobile))
// console.log(Object.values(Mobile))
// console.log(Object.entries(Mobile))

// // calling//acccessing  the methods 
// console.log(Mobile.calling())



// Arrays :
// usecases: dyanamic data ,logins ,search 
// benifits: easy access and deleting updating etc
// different ways to create the Arrays /
// 1.using the array literls -[]
// 2.using the new-keyword 
// 3.using the array global keyword


let a=[1,3,4,5,"hello",true,{name:"raju"}]

// different ways to access the array values
// console.log(a)
// console.log(a[2])
// console.log(a[6].name) //accesing the object inside array

// methods : map filter reduces slice etcc

// a.map((ele)=>console.log(ele))


// functions : are building blocks of any webapplication  
//  :dont repeat yourself (reuseability ),cleaner-code,optimization,performance 
// different types function 
//     🏹built-function :prompt(),alert(),confirm() etc .
//        🏹userbulit in function 
                //  1.Named Functions 
                //  2.arrow functions 
                //  3.anonoumous functions ,(function-expressions)
                //  4.iife(immediately invoked function expression)
                //  5 .generator functions 
// rules to declares the function names/identifiers is same the rules followed for varibales
// the variables/values passed in a function decalaration are called parameters (formal parameter/formal arguments)
// the variables/values passed in a function calling are called actual arguments
function data(a,b,c){ //parameters or params
// console.log(a,b,c)
// return 10
}

// calling
data(1,3,5)
data("s","a",7)

let r=data()
console.log(r)