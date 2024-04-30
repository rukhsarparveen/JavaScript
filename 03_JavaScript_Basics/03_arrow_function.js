// introduced in ES6
//--------Understand this keyword---------

const user = {
    username:"Rukhsar",
    age:18,
    welcomMassage: function(){
        console.log(`${this.username} welcome to website`)
        console.log(this) // give the object body
    }
}
user.welcomMassage();
user.username="abc"
user.welcomMassage()

console.log(this)  // {} empty object in node // in case of browser point to windows object

//note: can't use thisinside a function

// function check(){
//     console.log(this)
//     let username = "rukhsar"
//     console.log(this.username)  // print undefined
// }

// check()

const check1 = function(){
    let user = "ruks"
    console.log(this.user) // undefined
}

check1()

//----------Arrow function----------

//basic structure of arrow function is () => {}

const check2 = (val) => {
    let username = val
    console.log(this) //{}
    console.log(this.username) //undefined
    console.log(username) // parveen
}
check2("parveen")


const addTwo = (val1, val2) => {
    return val1+val2
}

console.log(addTwo(3,4)) //7

// implicit return
// structure:   () =>
const add  = (val1, val2) => val1+val2   // no need to write return here// you can also write it as (val1+val2)

console.log(add(2,1))

//note: if wrap around curly braces then write return, else dont

// return object

const objectReturn = () => ({username:"rukhsar"})

console.log(objectReturn())


