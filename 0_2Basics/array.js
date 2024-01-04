const myArr= [0,1,2,2,3,"hitesh",true]
//object-collection of multiple type js array are resizeable,value is extracted by index-0 based
//array make shallow copy- share same reference type
//deepcopy-donot share same copy
const myAr1=new Array(2,3,4)//array have prototypr propertu
//array methos
console.log(myAr1.push(3));//return the length of array
console.log(myAr1)//print the complete array with pushed element at last
console.log(myAr1.pop());//give the current length and remove last elememt
console.log(myAr1.shift(2))//remove the ist element
console.log(myAr1)
console.log(myAr1.unshift(3))//add to the start and give the length of array after adding
console.log(myAr1)
console.log(myArr.includes(true))
console.log(myArr.indexOf(3))//index of value 3
const newAr=myArr.join()//put all the values of myarr and convert it to string : type is string
console.log(myArr)
console.log(newAr)
//slice ,splice
console.log("Slice starts")
console.log("A",myArr)
const myn1= myArr.slice(1,3)//(1,3) both indices 3 not included 1 ,2 included
console.log(myn1)
console.log("B",myArr)
const myAr2= myArr.splice(1,3)
console.log(myAr2)
console.log(myAr2)
console.log(myArr)