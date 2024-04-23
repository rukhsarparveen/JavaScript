
// Number => String
let numberValue = 33
let stringValue = String(numberValue)

console.log(typeof stringValue)    // string
console.log(stringValue)           // 33

// String => Number
let strValue = "hello"
let numValue = Number(strValue)

console.log(typeof numValue)    // Number
console.log(numValue)          // NaN

// Boolean => number
let isBoolean = false
let numBoolean = Number(isBoolean)

console.log(typeof numBoolean)   // print number
console.log(numBoolean)          // 0 for false, 1 for true  

// NULL => Number

let isNull = null
let numNull = Number(isNull)

console.log(typeof numNull)     // number
console.log(numNull)           // 0

// undefined => Number

let isUndefined
let numUndefined = Number(isUndefined)

console.log(typeof numUndefined)   // number
console.log(numUndefined)         // Nan


//*********************operaions*********************

console.log("1"+2+2)    //122
console.log(1+2+"2")    //32
