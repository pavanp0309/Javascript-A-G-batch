//  In JavaScript, an array is a data structure or built in object that allows you to store 
// multiple values of different types under a single variable name
// which is Dynamic in size ,ease of accessing (crud),session mangemment ,api handling ,form handling ,dynamic content etc
// arrays are always numbered indexed 

// different ways to create the Arrays /
// 1.using the array literls -[]
// 2.using the new-keyword 
// 3.using the array global keyword


// let arr=[1,3,"raju",true,{name:'ramu'},[1,2,3]] // array literal method
// console.table(arr)
// // console.log(arr[0]) //accessing the values through index number 
// // console.log(arr[4].name) //accessing object inside array
// // console.log(typeof arr)

// let arr1=new Array("a",1)
// console.log(arr1)
// console.log(typeof arr1)

// let arr2=Array("data",true,1,arr)
// console.log(arr2)
// console.log(arr2[3][1])// accessing the values array inside array


// // properties 
// length 

// methods 
// pop : remove the element form last of array
// push : adding an elemnet to end of array
// shift: remove the first element from an array
// unshift :adds an element to start of an array
// slice :extracting the part of an array
// splice : extracts and also adds an elements (deleting and adding)
// concat : joins the arrays

// HigherOrder-methods 
// Map
// filter
// reduce 
// foreach 
// find 
// findIndex 
// sort 
// reverse 


let data=[1,2,3,4]
// console.log(data)
// // POP
// // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(data.pop())
// // PUSH
// // Appends new elements to the end of an array, and returns the new length of the array.
// console.log(data.push("😊"))
// console.log(data)

// // SHIFT
// // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(data.shift())

// // UNSHIFT:
// // Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(data.unshift("😂🤣"))
// console.log(data)


// SLICE 

// console.log(data.slice(0))//from start to last
// console.log(data.slice(0,1))//from startindex to lastindex-1
// console.log(data.slice(-3,-1)) 
           
// Splice :splice(start: number, deleteCount?: number,added)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(data)
// console.log(data.splice(0,3,"R1","R2","r3","R4"))       
// console.log(data)             

// syntaxes : for higher order methods
// let a=[1,3,4,5,6,7,7,,8,8,8,8,9,99,9,]
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }
// function dat(callback){
//   console.log("hello")
//   callback(a)

// }
// function dat1(a){
//     console.log("bye")
//     for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }
// }

// dat(dat1)

// function da(ele,index,newarr){
//   console.log("ele:",ele)
//   console.log("index:",index)
// }

// a.map(da)
// let a=[1,3,4,5,6,7,7,,8,8,8,8,9,99,9,]
// let res=a.map((ele,index,newarr)=>ele+1)
// console.log(res)


