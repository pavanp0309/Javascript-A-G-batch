// // creating the element
// let h1elemnt=document.createElement("p")
// console.log(h1elemnt)
// // creating the TextNode
// let text=document.createTextNode("goodevening🔔")
// console.log(text)
// // creating the Comment
// let comment=document.createComment("paragraph start")
// document.body.appendChild(comment)

// // creating the Document fragement
// // let doc=document.createDocumentFragment()
// // console.log(doc)
// // document.body.appendChild(doc)
// // appending the text created to html
// h1elemnt.appendChild(text)
// // appending the Html element into body
// document.body.appendChild(h1elemnt)




// easyway
// h1elemnt.innerText="goodmorning"
// h1elemnt.innerText="<h1>goodafternoon</h1>"
// h1elemnt.innerHTML="<h1>goodafternoon</h1>"
// console.log(h1elemnt)


// 🚩dom attributes : setattribute getattribute hasattribute  classname  classlist-add remove toggle

// let  link=document.createElement("a") // href target class id style
// console.log(link)
// // creating the Text 
// let text=document.createTextNode("clickme")
// console.log(text)

// // setting the attributes
// link.setAttribute("href" ,"www.amazon.in")
// link.setAttribute("target" ,"_blank")
// link.setAttribute("id" ,"id1")
// // class based value
// link.className="c1"
// link.classList.add('c2')
// link.classList.remove('c2')

// function add(){
//     console.log(link.hasAttribute("class")) //it returns true /false values
//     console.log(link.getAttribute("class")) //it returns values in the attribute
//   console.log(link.removeAttribute("id"))
//     link.classList.toggle('c2')
// }
// // appending the text to a
// link.appendChild(text)
// // appending the a tag
// document.body.appendChild(link)


let parent=document.querySelector(".parent")

// methods to insert the created elements
let liele=document.createElement("p")
let text=document.createTextNode("🚩item🚩")
liele.appendChild(text) //appended text inside li

// document.body.removeChild()
// appendChild  method will add the element to last and it can only isnsert element node
// append : it can add both element and text based values to last 
function add(){
    parent.appendChild(liele)
    // parent.appendChild("last") //ncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'
    // parent.append(liele)
    //  parent.append("last")
    // parent.after(liele)
    // parent.before(liele)
    // parent.insertAdjacentElement("afterbegin",liele)
    // parent.insertAdjacentElement("afterend",liele)
    // parent.insertAdjacentElement("beforebegin",liele)
    // parent.insertAdjacentElement("beforeend",liele)
    // parent.insertBefore(liele,parent.children[2],)
    // parent.insertBefore(liele,parent.firstElementChild.nextElementSibling.nextElementSibling)
    // parent.insertBefore(liele,parent.lastElementChild)/
    // parent.prepend(liele) //to first
    // parent.append(liele) // to last
    // parent.remove()
    
}
// parent.appendChild(liele)
// parent.removeChild(liele)
// parent.removeChild(parent.lastElementChild)
