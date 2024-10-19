// Elements: elements node 
// text: Textnode 
// comment : comment node 
// doctype : root node 
// const addtocart=document.querySelector('.card')
const changeTitle=document.querySelector('.add-to-cart')

function add(){
    // console.log(addtocart.parentElement.parentElement.parentElement.parentElement.parentElement) // it will access only the Html Elemnts 
    //    console.log(addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
    // console.log(addtocart.firstChild) // text
    // console.log(addtocart.firstElementChild) // img
    // console.log(addtocart.lastChild) // text
    // console.log(addtocart.lastElementChild) // text
    // console.log(addtocart.children)
    // console.log(addtocart.childNodes)
    // console.log(addtocart.children[1].lastChild) //text
    // console.log(addtocart.children[1].lastElementChild) //button
    // console.log(addtocart.children[1].lastElementChild.previousSibling)//text 
    // console.log(addtocart.children[1].lastElementChild.previousElementSibling)//p
    // console.log(addtocart.children[1].lastElementChild.previousElementSibling.previousElementSibling)//p 
    // console.log(addtocart.children[1].lastElementChild.previousElementSibling.previousElementSibling.nextSibling)//text 
    // console.log(addtocart.children[1].lastElementChild.previousElementSibling.previousElementSibling.nextElementSibling)//p
    // console.log(addtocart.children[1].lastElementChild.previousSibling)//text
    // console.log(addtocart.children[1].lastElementChild.previousElementSibling)//text
  console.log(changeTitle.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.previousElementSibling="done")
}