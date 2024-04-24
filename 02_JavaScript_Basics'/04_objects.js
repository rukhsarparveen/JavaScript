const tinderUser = new Object() // singleton object
//const tinderUser = {} // non-singleton object

tinderUser.name = "nisha"
tinderUser.age = 18
tinderUser.email = "rukhsar@gmail.com"
console.log(tinderUser)

//------Nested Objects-------

const userDetails = {
    email:"abc@gmail.com",
    fullname: {
        username: {
            firstname: "rukhsar",
            lastname: "parveen"
        }
    }
}

console.log(userDetails.fullname.username.firstname)

// -------Merger Multiple Objects--------

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)

const obj4 = {...obj1, ...obj2}
console.log(obj3)
console.log(obj4)

// -------- How to iterate values that comes from the databse

const users = [
    {
        id:1,
        name:"a"
    },
    {
        id:1,
        name:"a"
    },
    {
        id:1,
        name:"a"
    },
    {
        id:1,
        name:"a"
    }
]
// values from database might come as an array of objects
console.log(users[1].id)

//------ get keys, values, both------

console.log(Object.keys(tinderUser)) // it gives all the keys in the form of array so we can iterate over them.
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))// convert key, value pair in an array
console.log(tinderUser.hasOwnProperty('age'))  // check if something exist or not