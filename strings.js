// A string is a built-in object representing a sequence of characters that may consist of letters,
// numbers, symbols, words, or sentences.
// string are immutable(value cant be changed)  
// different ways to create the strings
 //🦾 using the string literal method   --primitive
        //  1.single quotes
        //  2.double quotes
        //  3.template literals(backticks ``)

// 🦾using the string Global keyword   --primitive
// 🦾using the New-Keyword    --non-primitive

// using the string literal method  
// let a='fs'
// let b="fs"
// let c=`fs`
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(a[0]="j")
// console.log(a) // strings are immutable 


// // using the gloabl keyword  
// let data=String("digital marketing")
// console.log(data)
// console.log( typeof data)

// // using the New-Keyword  
// let d=new String("ds")
// console.log( d) // primitive-non-primitive
// console.log(typeof d) // primitive-non-primitive


// properties and methods
// length  

// methods 
// toUpperCase
// toLowerCase
// toString
// concat 
// search-methods
// indexOf
// lastIndexOf
// includes
// chartAt
// chartCodeAt

// padstart
// padend
// replace
// replaceALL

// Methods to extract the parts of string 
// slice
// split
// substr 
// substring


let ex="devara"
let ex1="part-2"
// console.log(ex.toUpperCase())
// console.log(ex.toLowerCase())
// // contactination
// console.log(ex.concat(ex1))
// console.log(ex+ex1)
// console.log(`${ex} ${ex1}`)


// let ex3="devara searches for enemies1 enemies2 enemies3"
// console.log(ex3.length)
// console.log("index",ex3.indexOf("enemies"))// returns the index of starting character
// console.log(ex3.indexOf("enemies",27)) // returns the index of starting character
// console.log(ex3.indexOf("enemies",46)) //if search-index> length or equalto length it returns -1
// console.log(ex3.indexOf("jw")) //if search-string is not matched it returns -1
// console.log(ex3.indexOf("")) //if search-string is not matched it returns -1
// console.log(ex3.indexOf("enemies",-3)) //if search-string is not matched it returns -1


// console.log("lastindex",ex3.lastIndexOf("enemies")) //it search form last
// console.log("lastindex",ex3.lastIndexOf("enemies",5)) //if search-string is not matched it returns -1
// console.log("lastindex",ex3.lastIndexOf("enemies",-5)) //negative values are considered  as zero


// console.log(ex3.includes("devara")) //true // returns true or false values

// slice(startindex,endindex) : extraction methods
// console.log(ex3.slice())  // empty value extract entire strings
// console.log(ex3.slice(10))  // returns from startindex to last
// console.log(ex3.slice(0,6))  // returns from startindex to lastindex-1
// console.log(ex3.slice(5,4)) //start>endindex  returns empty space
// console.log(ex3.slice(0,-4)) // length+(indexvalue)=> 46-4=42
// console.log(ex3.slice(-6,-4)) // length+(indexvalue)=> 46-4=42
//                  //   40 ,42



// console.log(ex3.substring(-6,-4)) // negative values are treated as zero
// console.log(ex3.substring(0,6))
// console.log(ex3.substring(5,4)) //start>endindex it swaps the roles

// console.log(ex3.split('')) // returns array of string value
// console.log(ex3.split(' ').join()) // returns array of string value
// console.log(ex3.split(' ',1).join()) // returns array of string value


// let res="7999".padStart(10,"*")
// let res1="7999".padEnd(10,"*")
// console.log(res)
// console.log(res1)

// // TRIM METHODS ARE USED TO REMOVE THE WHITE SPACES 
// let a="   amazon  "
// console.log(a.length)
// console.log(a)
// console.log(a.trimStart())
// console.log(a.trimEnd())
// console.log(a.trim())

// replace method 
// let sub="Javascript is vEry easy for Javascript dev "
// console.log(sub)
// console.log(sub.replace(/javascript/ig,"html"))
// console.log(sub.replaceAll("javascript","😁"))
// console.log(sub.startsWith("Jav"))
// console.log(sub.endsWith("dev "))
// console.log(sub.match(/e/gi))
// console.log(sub.matchAll("e").next())
