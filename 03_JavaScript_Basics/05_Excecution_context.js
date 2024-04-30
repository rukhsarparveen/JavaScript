// code file given to js -> create global excecution context(kept inside this) -> Memory creation phase -> execution phase
// different environments have different GEC: for eg: browser GEC is a window object
// js is single threaded
//-------- three execution contexts:------------
// -> global execution context
// -> function execution context
// -> eval execution context

//--------phases----------
// 1. Memory creation phase
// 2. Execution phase

let val1 = 10
let val2 = 6

function check(num1,num2){
    let total = num1+num2
    return total
}

let result1 = check(val1,val2)
let result2 = check(10,2)

//Memory creation phase:
// val1 = undefined
// val2 = undefined
// check = definition
// result1 = undefined
// result2 = undefined

// Execution phase
//val1 = 10
// val2 = 6
// result1 = 16 create check function:  GEC -> Memory creation -> execution
// result2 = 12 create check function:  GEC -> Memory creation -> execution
