// Nullish coalescaling operator (??)

let val1
val1 = 5 ?? 10
console.log(val1) // 5


let val2
val2 = null ?? 10  // if first value is null assign second value
console.log(val2) // 10

let val3
val3 = undefined ?? 10  // if first value is null assign second value
console.log(val3) // 10


// Ternary Operator

//condition ? true : false