// const user= {
//     username: "Disha",
//     price: 1000,

//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//         /** when the value or context changed outside the output will come
//          * {
//                 username: 'Sam',
//                 price: 1000,
//                 welcomeMessage: [Function: welcomeMessage]
//          *  }
//          */
        
//     }
// }

// user.welcomeMessage()
// user.username = "Sam" //Output-> Sam , welcome to website
// user.welcomeMessage()

// console.log(this); //Output -> {} -> this is coming because the (this) is not calling at globally the context or the value is inside the object
//the (this) work inside the object means its recomended to call the function

// function chai(){
//     let username = "histesh"
//     console.log(this.username);
// }
// chai() //Output -> undefined

// const chai = function(){
//     let username = "Disha"
//     console.log(this.username);
// }
// chai() // Output -> undefined

// const chai = () => {
//     let username = "Disha"
//     console.log(this.username);
// }
// chai() // Output -> undefined

/**When you use arrow function using this below method 
 * curly braces {} a return keyword is needed*/
/**This is explicit method bcz of return keyword is used */
// const addone = (num1,num2) => {
//     return num1 + num2
// }
// addone(1,3)

/**When you use arrow function using this below method return
 * keyword is not needed instead that you can wrap only parenthesis ()
 * */
/**This method is called implicit method bcz return keyword is not used*/
// const chai = (num1, num2) => (num1 + num2)
// console.log(chai(2,3)) // 5


/**When you want to see object return in implicit way */

const obj = () => ({ username: "Disha"})
console.log(obj()) // Output -> { username: 'Disha' }

