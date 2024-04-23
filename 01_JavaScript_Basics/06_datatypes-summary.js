//primitive  - call by value
// 7 types: String, Number, Boolean, NULL, Undefined, Symbol, BigInt

//Non Primitive - reference type
//Array, Object, Functions


//symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // false


//bigint
const bigNumber = 754654554654675765n
console.log(typeof bigNumber)   // bigint


//array
const a = ["hi","hello","hey"]
console.log(typeof a) //object


//object
let myObj = {
    id: 1,
    name: "ruks",
    num: 7797,
}
console.log(typeof myObj) //object


let myFun = function(){
    console.long("hello")
}
console.log(typeof myFun)//function object

//************************************//

// Stack(primitive) = get copy
//heap (non primitive) = get reference of original data


