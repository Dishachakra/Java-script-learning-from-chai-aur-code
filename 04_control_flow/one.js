const isUserloggedIn = true
const temperature = 50

// if( isUserloggedIn ){
//     console.log("Executed");
    
// }
// if( temperature < 50){
//     console.log("Less than 50");
// }
// if( temperature === 50 ){
//         console.log("Equal to 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if( score > 100 ) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);

const balance = 1000
/**Implicit Scope */
// if( balance > 500) console.log("TEST"), console.log("test2");

// if( balance < 500){
//     console.log("Less than 500");
// }
// else if( balance < 750){
//     console.log("Less than 750");
// }
// else if( balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

const UserloggedIn = true
const debitCard =true
const loggedInFromGoogle = false
const loggedInFromEmail = true

 if( UserloggedIn && debitCard ){
    console.log("Allowed to purchase");
    console.log("User Logged In");
 }
 else if(!debitCard){
    console.log("Allow the debit card");
        
 }
else{
    console.log("Not allowed");
    
}

if( loggedInFromGoogle || loggedInFromEmail ){
    console.log("User Logged in");
}
