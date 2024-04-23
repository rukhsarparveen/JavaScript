
let name = "bharat"
let count = 50

console.log(`my name is ${name} and value count is ${count}`)

// string is an object and when you run it in console you will get to see all the methods


const gameName = new String('bharat')
console.log(gameName[1]) // h
console.log(gameName.__proto__) // {}
console.log(gameName.length)
console.log(gameName.toUpperCase()) // changes are not done on original string
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))


const newString =gameName.substring(0,3)
console.log(newString)

const newStringAgain =gameName.slice(0,3) // we can give negative values as welll
console.log(newStringAgain)


const newStringOne = "        check        "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "www.rukhsar123parveen.com"
console.log(url.replace('123','-'))

console.log(url.includes('rukh'))