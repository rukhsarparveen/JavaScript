//forof
const arr = [1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}

//Map 

const map = new Map()
map.set('IN', "hello")
map.set('US',"USA")
map.set('IN',"bye") //duplicate key not allowed
 console.log(map)

 for (const [key,val] of map) {
    console.log(key,val)
 }


//  const myObj = {
//     "game1":"abc",
//     "game2":"xyz"
//  }

//  for (const [key,value] of myObj) {
//     console.log(key,value) // give error
//  }

// Note: forof won't work on objects, use forin

 const myObj = {
    "game1":"abc",
    "game2":"xyz"
 }

 for (const key in myObj) {
    //console.log(key) // print only keys
    console.log(myObj[key]) // print value
 } 

 //------ forin on array--------

 let myArr = ["hello","hi","hey","wassssupppp"]

 for (const key in myArr) {
    //console.log(key) // print 0,1,2,3
    console.log(myArr[key])
 }

 // Note: maps are not iterable: forin won't print anything


 //--------foreach--------------
 