// DOM : DOCUMENT OBJECT MODEL
// DOCUMENT : is nothing but the Html 
// all the html elements are considered as tree of Nodes (objects)
// let h1={
//   innerText:"hello",
//   textcontent:"hello",
//   getelement:function(){console.log(this.innerText)}
// }
// console.log(h1.textcontent)
// The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document.
// console.log(h1.getelement())

// console.log(document)

// methods to access the Html elements 
//1. document.getElementById()
//2. document.getElementsByClassName()
//3. document.getElementsByTagName()
//4. document.querySelector()
//4. document.querySelectorALL()

// 1.getElementById() it access only the first element that matched in the document
// let idele=document.getElementById("id1")
// console.log(idele)
// // console.log(idele.innerText="<p>hello</p>") // tags are inserted in the form text format only and we cant apply styles in innerText
// // console.log(idele.innerHTML="<p>hello</p>") // tags are inserted in the form tags only and styles can be applied

// // apllying the styles
// console.log(idele.style.backgroundColor="red")
// console.log(idele.style.padding="5px")
// console.log(idele.style.textAlign="center")


// // 2.getElementsByClassName("c1") it returns htmlcollection of array of values
// let classele=document.getElementsByClassName("c1")
// // console.log(classele)
// // console.log(classele[0].style.backgroundColor="red")
// // console.log(classele[2].style.backgroundColor="red")

// for(let i=0;i<classele.length;i++){
//     classele[i].style.backgroundColor="red";
//     classele[i].style.padding="5px";
//     classele[i].style.border="2px solid yellow"
//     classele[i].innerText="classmethod📌"
// }

// // 3.getElementsByTagName : it also returns htmlcollection of array of values
// let tagEle=document.getElementsByTagName("h4")
// console.log(tagEle[3].style.backgroundColor='red')
// for(let i=0;i<tagEle.length;i++){
//     tagEle[i].style.backgroundColor="blue";
//     tagEle[i].style.padding="5px";
//     tagEle[i].style.border="2px solid yellow"
//     tagEle[i].innerText="tagmethod📌"
// }

// method:Jquery
// querySelector it helps access tag values idvalues classvalues
// id=# 
// class -.(dot)
// it access only the first element that matches in the document 
let queryEle=document.querySelector("h4")
console.log(queryEle)
// console.log(queryEle.style.padding="5px")
// console.log(queryEle.style.border="2px solid yellow")

// querySelectorAll method  : it returs nodeList of Array values
let queryEleall=document.querySelectorAll("h5,head")
console.log(queryEleall)
// for(let i=0;i<queryEleall.length;i++){
//     queryEleall[i].style.backgroundColor="blue";
//     queryEleall[i].style.padding="5px";
//     queryEleall[i].style.border="2px solid yellow"
//     queryEleall[i].innerText="tagmethod📌"
// }

// queryEleall.forEach((ele)=>ele.style.backgroundColor="red")