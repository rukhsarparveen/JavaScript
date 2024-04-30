// Immediately Invoked Function Expression
// named IIFE
(function check(){
    console.log("hello")
})();

// unnamed IIFE
((msg) => {
    console.log(`${msg}`)
})("bye")

// when you are writing two IIFE functions, make sure you put ; (semicolon)