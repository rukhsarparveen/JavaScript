let marvel_heros = ["thor", "spiderman","ironman"]
let dc_heros = ["supeman","flash","batman"]

marvel_heros.push(dc_heros) //this will push an array inside another array
console.log(marvel_heros)
marvel_heros.pop()
let all_heros = marvel_heros.concat(dc_heros) // after concat always store in a new array
console.log(all_heros)

//spread
let all_new_heros = [...marvel_heros,...dc_heros] // advantage is that we can concat any number of arrays
console.log(all_new_heros)

// flat

let loop_array = [1,2,3,[4,5,6],7,8,[3,4,5,[5,6,7]]]

let loop_another_array = loop_array.flat(Infinity)
console.log(loop_another_array)


//convert in array
console.log(Array.from("rukhsar"))

let myObj = {
    name:"rukhsar"
}
console.log(Array.from(myObj)) // print [] because we have not given whether we want to create array based on values or keys


const val1 = 100
const val2 = 200
const val3 = 300

console.log(Array.of(val1,val2,val3)) // create array