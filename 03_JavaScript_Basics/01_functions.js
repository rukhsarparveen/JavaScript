function userLoggedIn(username = "admin"){
    if(username === undefined){
        console.log("invalid user")
        return
    }
    return `Welcome ${username} !!!`
}

console.log(userLoggedIn("rukhsar")) // print Welcome rukhsar !!!
console.log(userLoggedIn()) // print Welcome admin !!!

// if after username = "admin" is not written and if we don't pass username then we get undefined


//-------- Rest operator ----------

function addToCart(num1){
    return num1
}

console.log(addToCart(100,200,300,400,500)) // output - 100

// with rest operator
function addToCart2(...num1){
    return num1
}

console.log(addToCart2(100,200,300,400,500)) // output - [100,200,300,400,500]

function addToCart3(val1,val2,...num1){
    return num1
}

console.log(addToCart3(100,200,300,400,500)) // output - [300,400,500]

//--------- pass object-------

const user = {
    name:"rukhsar",
    city:"delhi"
}

function UserDetails(userObject){
    console.log(`My name is ${userObject.name} and i am from ${userObject.city}`)
}

UserDetails(user)
UserDetails({
    name: "abc",
    city:"xyz"
}) // directly pass object

//-------- Pass Array----------

const myArray = [10,20,30]

function returnData(MyArray){
    return MyArray[1]
}

console.log(returnData(myArray))