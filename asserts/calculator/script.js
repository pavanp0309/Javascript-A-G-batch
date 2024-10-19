// accessing the Html Elements to add the Functionalities
let result=document.querySelector("#result")
let btnContainer=document.querySelector(".container")



// adding the functionalities for button click--->mouseEvents
btnContainer.addEventListener("click",(e)=>{
       let target=e.target
    //    checking the conditions weather clicked elements is input and type is button
     if(target.tagName=="INPUT" && target.type=="button"){
        handleInput(target.value)
     }
})


// adding the functionalities for keypress click--->keyBoardEvents
document.addEventListener("keydown",(e)=>{
    //  console.log("keybaord:",e)// optional-debbuging purpose
     let key=e.key
    //  console.log("keybaord:",key)//optional
     
     if((key>="0"&& key<="9") ||
      ["+","-","*","%","/","=",".","Delete","Enter","Backspace"].includes(key)){
        handleInput(key)
     }

})



// Handling the both keybaord and Mouse-Events 
function handleInput(input){
      if(input=="C"||input=="Delete"){
        result.value=""
      }else if(input=="✂" || input=="Backspace"){
        result.value=result.value.slice(0,-1);
      }else if(input=="=" || input=="Enter"){
        // calculating the values based the input given by user
        Calculate(result.value) //10+6
      }else{
        // result.value+=input
        UpdateScreen(input)
      }
}


// function to upadate the values on the screen
function UpdateScreen(value){
    result.value+=value
}


// function for calculating the Result
function Calculate(expression){
    result.value=eval(expression)

}

