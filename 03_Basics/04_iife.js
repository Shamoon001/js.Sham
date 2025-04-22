// Immediately Invoked Function Expression
// Global scope pollution can sometimes create problems. To solve this, we can use an IIFE to get rid of global scope variables
(function chai(){
    console.log(`DB Connected`);
})();
//First parenthese is for function , second one is for execution

(  (name) => {
    console.log(`DB CONNECTED Two ${name}`);
    }) ('Shamoon')