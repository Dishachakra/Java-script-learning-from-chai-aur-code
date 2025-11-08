// Immediately Invoked Function Expression (IIFE)
/**Mainly IIFE is used for, the code which is globally
 * polluted and that polluted things doens't effect any 
 * function that's why IIFE is used . For the globally
 * polluted things cant get polluted any IIFE used functions.
 */
/**Using of IIFE -> First panenthesis () is used to write any
 * function inside them and second panenthesis () is used
 * for the execution call
 * 
 * ** In IIFE the function started to run to end the function
 * ** we have to add semicolon (;) to execute next function
 */
/**Method 1 this is named IIFE*/
(function chai() {
    console.log(`DB CONNECTED`);
})(); // DB CONNECTED

/**Method 2 using arrow function that is unnamed IIFE*/
( () => {
    console.log(`DB CONNECTED TWO`);
    
} )(); // DB CONNECTED TWO

/**Method 3 using arrow function */
/**Passing the parameter and argument */
( (name) => {
    console.log(`Hello ${name}`);
    
} )("Disha");
