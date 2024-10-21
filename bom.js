// BOM :BROWSER OBJECT MODEL 

// Properties  of Bom 
// localStorage ,sessionStorage ,cookies -->storage 
// navigator , location , screen  ,history

// Methods of Bom 
// confirm prompt  alert open  close
// setTimeout ,setInterval ,clearInterval , clearTimeout 

// 📌localStorage and sessionStorage 
//localStorage: allows web applications to store data locally within the user's browser – with no expiration date
            //   : it can only store 10mb of data 

// console.log(window.localStorage)


// // setItem : used to store the data  (CREATE)
// let res=localStorage.setItem("data","vishwas")
// let res1=localStorage.setItem("data2",9)

// // getItem : used to reterive the data  (READ)
// let res3=localStorage.getItem("data")
// console.log(res3)

// removeItem :used to remove the single Item form database [Delete]
// localStorage.removeItem("data")
// localStorage.removeItem("data2")

// Removing all items 
// localStorage.clear()

// JSON : JAVASCRIPT OBJECT NOTATION 
// JSON.stringify( ) which converts any datatype into json format 
// JSON.parse( ) which converts any json format to normal datatype(readable format)

// object format
// let a={
//     name:"ramu"
// }

// // json format
// let a1={
//     "name":"ramu"
// }

// let example=localStorage.setItem("ex",[1,"hello",{name:"ramu"}]) 
// let example1=localStorage.setItem("ex2",JSON.stringify([1,"hello",{name:"ramu"}])) 

// let r=localStorage.getItem("ex")
// let r1=JSON.parse(localStorage.getItem("ex2"))
// console.log(r)
// console.log(typeof r1)

// sessionStorage   same as localstorge but data remains until the tab is opened and limit is upto 5mb
// let res4=sessionStorage.setItem("data","vishwas")

// navigator :Navigator object that contains information about the web browser
console.log(navigator.appCodeName)
console.log(navigator.appVersion)
console.log(navigator.languages)
console.log(navigator.vendor)

console.log(location)
console.log(location.href)
console.log(location.port)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.host)

// if(location.protocol !== "https"){
//     alert("site is not secure")
// }

function openpage(){
    location.href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart"
    //   location.assign("https://www.amazon.in/gp/cart/view.html?ref_=nav_cart")
    //  location.replace("https://www.amazon.in/gp/cart/view.html?ref_=nav_cart")
    }