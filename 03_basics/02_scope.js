// const { use } = require("react")

// let a = 300
    
// if(true){
//     let a = 10
//     const b = 20
//     // console.log("Inner: ", a);
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

/**Nested scope */

// const one = () => {
//     const username = "Disha"

//     const two = () =>{
//         const website = "facebook"
//         console.log(username);
//     } // local scope
//     // console.log(website);
 
//     two()
// }
// one()


// if (true) {
//     const username = "disha"
//     if (username === "disha") {
//         const website = "youtube"
//         console.log(`Welcome ${username} to our ${website} channel`);
//     }
//     // console.log(website);
// }

// console.log(username);


/**---------- ----------  */
//Calling function method 1
/**Using this function you call the function before
 * intialization
 */
console.log(addone(2));
function addone(num){
    return num + 1
}


//Calling function method 2
/**Using this function though you have mentioned
 * (const addtwo) that is the expression (addtwo), the funtion is under them
 * so you can't call the function before initialization
 */
const addTwo = function(num){
    return num + 2
}
addTwo(5)
