// resizable and mix data types
// array copy operation create shallow copy

let myArray = [1,2,3,4,5,6]

console.log(myArray)
myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)

console.log(myArray.includes(5))
console.log(myArray.indexOf(5))

//slice - don't manipulate original array
// splice - manipulate original array

let data = [0,1,2,3,4,5,6]
let newSliceData = data.slice(1,3)
console.log("A ",data)
console.log(newSliceData)

let newSpliceData = data.splice(1,3)
console.log("B ",data)
console.log(newSpliceData)