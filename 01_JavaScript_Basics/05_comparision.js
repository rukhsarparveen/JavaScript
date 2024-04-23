
console.log(null > 0)    // false
console.log(null == 0)   // false
console.log(null >= 0)   // false

//The reason is that equality check (==) and comparision operators (>, <, >=, <= ) work differently. comparision convert null to a number
// num will become 0 thats why null(0) > 0 is false but null(0) >= 0 is true

// ******** strict check ********

console.log("2" == 2) // true
console.log("2" === 2) //false