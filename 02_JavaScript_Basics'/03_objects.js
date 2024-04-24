// two ways to declare objecs - literals or constructor
// singleton - created using constructor

//---constructor---
//Object.create

//---literals---- = multiton

const mySym = Symbol("key1")
const mySym1 = Symbol("key2")
const JsUsers = {
    name : "Rukhsar",
    age : 18,
    mySym:"key2", // if we write symbol like this, it is not symbol. its string.
    [mySym1]:"key3", // this is symbol
    "email address" : "rukhsar@gmail.com", // can't be accessed using dot operator
    isLoggedIn : false
}

console.log(JsUsers["email address"])
console.log(typeof JsUsers["mySym"])
console.log(typeof JsUsers[mySym1])

// Object.freeze(JsUsers) // after this if we make any changes it will not reflect in object values.
console.log(JsUsers)

JsUsers.greetings = function(){
    console.log(`My name is ${this.name}`)
}
console.log(JsUsers.greetings) // this will print [Function (anonymous)] which is refernce
console.log(JsUsers.greetings()) // this will execute the function

// Note: objects can be accessed either by dot (.) operator or by bracket [].
// better practice is to access it using bracket, because if keys will have space, we can't access them using dot operator, for example "email address"
// if you want to use symbols as key then within object write it within bracket []