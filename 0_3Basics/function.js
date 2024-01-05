//basic function
const v=function(){

}
v//definition
v()//calling

const res=function(no1,no2){console.log(no1+no2)
    return no1+no2;
}

//here ... is rest operator and bunde everything in array
function calculateCartPrice(...num){
    return num

}
console.log(calculateCartPrice(200,345,322,543))

const user={
    name:"hitesh",
    age:21
}
function handleObject(anyobj){
    console.log(`username is ${anyobj.name} and price is {${anyobj.age}}`)
}
handleObject(user)

function handleFunction(getArray){
    return getArray[0]
}
console.log(handleFunction([2,3,4]))