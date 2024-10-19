// usecases : login validations , printing dynamic content ,notification timers,games
// Loop Statements:
// forloop : if no of irration are known previoulsy 




// syntax 
// for(initialization;condition;increment/decrement){

// }


// for(let i=0;i<5;i++){ 
//     console.log("hello")
// }

// printing the even no 
// let sum=0;
// for(let i=0;i<50;i++){ 
//     if(i%2==0){
//         console.log(sum+=i)
//     }
// }
// console.log("total",sum)
// let fruits=["apple","banna","cherry"]

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// countdown 
// for (let i=5;i>0;i--){
//     console.log(i)
// }

// example for login validation 
// let Validuser="ravi"
// let validpassword="ravi123"
// let maxattempts=3;

// for(let attempt=1;attempt<=maxattempts;attempt++){
//     const user=prompt("enter user name")
//     const password=prompt("enter user passwprd")

//     if(user==Validuser&&password==validpassword){
//         console.log("login is successfull")
//         break;
//     }else{
//         console.log(`attemsts ${attempt} failed`)
//         if(attempt===maxattempts){
//             console.log("max attempts is over plz try after 24 hrs")
//         }
//     }
// }


// nested loop
// debugger
// let n=5

// for(let i=0;i<n;i++){ // rows

//     for(let j=0;j<i;j++){ //cols
//         document.write("*  ")
//     }
  
//     document.write("* <br/>")
// }

// condition based loop 
// while(condition){
//     // increment/decrement
// }

// let password;
// const validpassword="123"
// while(password!==validpassword){
//     password=prompt("enter a password")
//     if( password==validpassword){
//         console.log("logined success")
//     }else{
//         console.log("login failed")
//     }
// }

// let number;
// while(true){
//     number=prompt("enter a negative number to stop the excution")
//     if(number<0){
//         console.log("existing...")
//         break;
//     }

//     console.log("your entere no",number)
// }

// do-while :  is same as while but its excuted once even the condition false or true
// do{

// }while(condition)

// let password;
// const validpassword="123"
// do{
//     password=prompt("enter a password")
//     console.log(password)
   
// }while(password!==validpassword);
// console.log("access given")

// const secretNo=6;
// let guess;
// do{
//     guess=parseInt(prompt("guess the no"))
//     if(guess<secretNo){
//      console.log("no is too low")
//     }else if(guess>secretNo){
//         console.log("no is too high")
//     }else{
//         console.log("🎉")
//     }
// }while(guess!==secretNo);
