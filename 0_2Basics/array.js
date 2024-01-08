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
const myAr2= myArr.splice(1,3)//1,3 both indices included  but it also remove that part from original arraay

console.log(myAr2)
console.log(myAr2)
console.log(myArr)
//difference between slice and splice
//1)Slice-it will print array and (1,3) donot include index 3
//2)Splice-it will print the array include both indices and remove that part from the original array 
console.log("*************--------------**************************")
const marvel_heros=['thor',"ironman","spiderman"]
const dcHeros=["superman","flash","batman"]
marvel_heros.push(dcHeros)//take array as data 
console.log(marvel_heros)//it will push the dc array in this array not join that array
marvel_heros.pop();
//now concat method-it will give new array with both array properties
let newHeros = marvel_heros.concat(dcHeros);
console.log(newHeros)//all the heros get together

//spread operator (...)(drop kanch glass)
const all_new_heros=[...marvel_heros,...dcHeros]
console.log(all_new_heros)//all elements get outside

const anotherArray=[1,2,3,4,[4,56,7],3,[5,6,[3,1,2,]]]
const real_another_array=anotherArray.flat(Infinity)//Infinty tell us depth we give 1 2 also
console.log(real_another_array)

console.log(Array.isArray("hites"))
console.log(Array.from("hites"))//convert the string to array
console.log(Array.from({name:"hitesh"}))//interesting case return empty array

let score1=100
let score2=200
let score3=2
console.log(Array.of(score1,score2,score3))//it will create an array