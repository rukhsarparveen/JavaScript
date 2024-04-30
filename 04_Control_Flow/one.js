if("02"=="2"){
    console.log("executed")
}
else{
    console.log("not executed")
}

// const val = 500
// if(val<1000) console.log("test"),
// console.log("test2")

//-----falsy values-------
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//------truthy value-------
// "0",'false', " ",[],{},function(){}


//check if array is empty or not
let userEmail = []
if(userEmail.length===0){
    console.log("array is empty")
}


//check if object is empty or not
let emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

// false == 0 -> true
//false == '' -> true
//0 == '' -> true