const balance = new Number(100);
console.log(balance.toString().length) // 3
console.log(balance.toFixed(2)) //100.00 // use in case of e-commerce

const num = 123.865

console.log(num.toPrecision(2))
console.log(num.toFixed(2))

// precision - starts before decimal
// fixed - starts after decimal

const hundreds = 1000000000

console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

//****************Maths****************//

console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.sqrt(4))

console.log(Math.random()) // get values between 0 to 1
console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)