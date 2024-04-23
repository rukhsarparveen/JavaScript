let myDate = new Date() // type is object

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toUTCString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toJSON())

let myCreatedDate = new Date(2023,0,15,5,3) // months starts with 0 in javascript
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)  // milliseconds
console.log(myDate.getTime())
// convert it into seconds
console.log(Math.round(myTimeStamp/1000))