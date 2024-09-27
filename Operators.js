// Operators are special symbols used to assign values; compare values 
// perform operations on single or multiple operands (data /values) and  produce the some result.


// Arithmetic Operators
// + addition operator // string operator
// console.log(1+5)//6
// console.log(100+500)//6
// console.log("1"+500)// concatination  1500
// console.log("1"+"8") // 18
// console.log(1+"8") // 18
// console.log(1 + +"8") // 9 +unaryplus
// console.log("1" + +"8") // 9 +unaryplus
// const a=+"1"
// console.log(typeof a)

// // -
// console.log(10-7)//3
// console.log(10-"7")//3
// const a1="10"-"7"
// console.log(typeof a1)//3

// // *
// console.log(1*2)// 2
// console.log(1*"3")// 3
// console.log("2"*"3")//6

// / ---> The division operator (/) divides numbers.returns the Quotient
// console.log(3/2) //1.5
// console.log(3/"2") //1.5

// % The modulus operator (%) returns the division remainder.
// console.log(3%2) //1
// console.log(3%"2") //1
// console.log(2%"3") //1

// exponential operator ** 
// console.log(2**2) //4
// console.log(2**3) //8==>2*2*2


// numbertype coversion parseInt parseFloat
// taking the values from user 
// let a=parseInt(prompt("enter a value"))
// let b=parseFloat(prompt("enter a value2"))
// console.log(typeof a)
// console.log(a+b)

// increment and decerement operators 

// ++  increment
        //    pre-increment: increments the value by 1 before it used
        // post-increment : increments the value by 1 after it used

// -- decerement
// pre-decrement :decrements the value by 1 before it used
// post-decrement : decrements the value by 1 after it used

// let a=2  // 2
// let b=3 //2 ==>3 ==>2
// console.log(a)//2
// // console.log(++a)//3
// console.log(a++)//2
// console.log(a)//2
// console.log(b)//3
// console.log(--b)//2
// console.log(b--)//3
// console.log(b)

// let data=a+b + ++a + b++ + a++ + --a + a
        //  2+3 +3 + 3+ 3+ 3+3 
// console.log(data)

// let data1=a-b+--b+--a+ ++a + b++ + b-- + --a + a++ +b
//         // =2 - 3 + 2 + 1 + 2 + 2 + 3 + 1 + 1+ 2
//  console.log(data1)

// let a2=a*b + a-- + ++b - b + a++ + --a * b
//     //    2*3+ 2 + 4 - 4 + 1 + 1* 4 
//     console.log(a2)

// Comparison Operators
// Comparison operators compare two values and return a boolean value, either true or false

// console.log(10>10)//false
// console.log(10>"10")//false
// console.log(10>=10)//true
// console.log(10<=10)//true
// console.log(10<10)//false
// console.log(10==10) // true
// console.log(10=="10") // true
// console.log(10==="10") // false --> it check the datatype also (strictly equal to )
// console.log(10!=10)

// Logical Operators
// Logical operators perform logical operations and return a boolean value, either true 
// or false
// &&-- and operator 
// || --->or operator
// !---> not operator
// let age=10
// let isindian=true
// console.log(true&&true)//true
// console.log((age>18)&&(isindian))//falsw
// console.log(true||true)//true
// console.log(true||false)//true
// console.log((age>18)||(isindian))
// console.log(!true)
// console.log(!!0&&"hello")
// console.log(!!true) // it makes sure that value true when true is passeed or false is when false passed
// console.log(0&&"hello")


// assignment operators
// let a=10
// // let b=20
// // let c=10+a
// let c=10
// console.log(c+=a)
// console.log(c*=a)
// console.log(c%=a)
// console.log(c-=a)


// TERNARY OPERATOR -- es6 : is syntatic sugar of if-else condition

// let age=19
// let isindian=true

// if(age>18&&isindian){
//    console.log("eligible for vote")
// }else{
//    console.log("child-not eligible")
// }

// let a=(age>18&&isindian)?"eligible for vote":"child-not eligible"
// console.log(a)

// let a1=parseInt(9.8)
// console.log(a1==10)
// let x=10
// let y=15
// console.log(x+=2*y)
// let res=10+2*15

// let b=parseInt(prompt("enter the base value"))
// let h=parseInt(prompt("enter the height value"))
// let area=0.5*b*h
// console.log(area)

// 2.
let p=parseInt(prompt("enter npm initthe  value"))
let a=(p>0)?"positive no":"negative no"
console.log(a)


// assignment -sol
// sol:h = 5 (from a++) + 8 (b) + 7 (++a) + 40 (--a * b) + 8 (b) - 1.6 (b / a) + 0.625 (a / b) + 390625 (a ** b) + 10 (a * 2) + 16 (b * 2) (pre-incremented)

// h = 5 + 8 + 7 + 40 + 8 - 1.6 + 0.625 + 390625 + 10 + 16

// h ≈ 390711.025

// a++ where a = 5 (post-increment): a++ evaluates to 5, and a becomes 6
// ++a where a = 6 (pre-increment): ++a evaluates to 7, and a becomes 7
// --a where a = 7 (pre-decrement): --a evaluates to 6, and a becomes 6
// --a * b where a = 6 and b = 8: --a evaluates to 5, and a becomes 5, then --a * b evaluates to 5 * 8 = 40
// b / a where b = 8 and a = 5: b / a evaluates to 8 / 5 = 1.6
// a / b where a = 5 and b = 8: a / b evaluates to 5 / 8 = 0.625
// a ** b where a = 5 and b = 8: a ** b evaluates to 5 ** 8 = 390625
// a * 2 where a = 5: a * 2 evaluates to 5 * 2 = 10
// b * 2 where b = 8: b * 2 evaluates to 8 * 2 = 16
// a * 2 (post-increment) where a = 5: a * 2 evaluates to 5 * 2 = 10, and a becomes 6
// b * 2 (pre-increment) where b = 8: Increment b by 1 before the operation: 8 * 2 = 16, and b becomes 9
