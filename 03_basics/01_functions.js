/*---------  Method 1 ---------*/
// function sayMyname() {
//     console.log("D");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("A");
// }
// sayMyname()

/*--------- Method 2 ---------*/
// const sayMyname = () => {
//     console.log("D");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("A");
// }
// sayMyname()

/*---------  1st Method  ---------*/
// const addNumbers = (a,b) => {
//     //1st method
//     // console.log(a+b);

//     //Second method
//     let c = a+b;
//     console.log(c);
// }
// addNumbers(2,3)

/*--------- 2nd method ---------*/
// const addNumbers = (a,b) => {
//     //1st Method
//     // let c = a+b;
//     // // console.log("Disha");
//     // return c // aftrer return by default no value will print no code will execute

//     //2nd Method
//     return a + b
// }
// const result = addNumbers(2,3)
// console.log("Result: ", result);


// const loginUserMessage = (username) => {
//     if(username !== undefined){
//         return `${username} just logged in`
//     }
//     else{
//         return `No user logged in`
//     }
// }
// const loginUserMessage = (username = "Drish") => {
//     if(username !== undefined){
//         return `${username} just logged in`
//     }
//     else{
//         return `No user logged in`
//     }
// }

// const logged = loginUserMessage() 
// const logged = loginUserMessage("Disha") // if I write an argument it will overwrite this argument above the mentioned parameter given on function
// console.log(logged); // Disha just logged in

// console.log(loginUserMessage("Disha")); //Disha just logged in
// console.log(loginUserMessage()); //If you dont pass an argument it show -> undefined just logged in

/**----------- Part 2 -----------*/
/*By using (...) at function parameter it is a rest oprator 
* Purpose: Collects multiple values into a single variable (array/object)
* Used in: Function calls, array literals, or object literals.
*/
/**By using (...) at function call at argument mean at 
 * Purpose: Spreads or expands an array or object into individual elements.
console or like that 
* Used in Function calls, array literals, or object literals.
*/
// const calculateCartPrice = (...num1) => { //using rest operator
//     return num1
// }
// console.log(calculateCartPrice(200, 500, 600)); // [ 200, 500, 600 ]

    /**Passing the object */
    // const user = {
    //     username: "Disha",
    //     price: 199
    // }
    // const handleObject = (anyObject) => {
    //     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
    // }
    // // console.log(handleObject(user));

    // handleObject({
    //     username: "sam",
    //     price: 399
    // })

    /**Passing the array */
    const myNewArray = [200, 400, 100, 600]

    const anotherSecondval = (getArray) => {
        // return getArray // [ 200, 400, 100, 600 ]
        // return getArray // [ 200, 400, 500, 1000 ]
        return getArray[2] // 500
        // return getArray[1] // 400
    }
    // console.log(anotherSecondval(myNewArray));
    console.log(anotherSecondval([200, 400, 500, 1000]));
    
    