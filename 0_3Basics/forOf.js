/**QUICK NOTES
 * for Of loop -work on array ,string not on object
 * for of loop in case of map take ([key,value] of map)
 * object is not iterable that's why it doesnot work for that
 * 
 * for In loop -work for object,array give its key and we can acces value from key
 * for In-map is not iterable
 * 
 * forEach is for array return callback (item,index,array ) paranmeter of callback fxn
 * 
 * 
 * 
 * 
 */



//forOf -array
const arr=[1,2,3,4]
//Object here means the object,arr where we want to write 
for(const i of arr){
console.log(i);
}
let greet="hello"
for(i of greet){console.log(i)}
//maps
const map =new Map();
map.set('In',"India")
map.set('Usa',"unites states")
console.log(map)
for(const [key,value] of map){
    console.log(key,"-",value)
}

//object is not iterable
/*const myObj={
    'game1':"LFS",
    'game2':"Spiderman"
}
for(let i of myObj){
    console.log(i)
}*/
//object  -for in
const myObj={
    'game1':"LFS",
    'game2':"Spiderman"
}
for(let i in myObj){
   //get the key here
   console.log(i)
   //get value here
   console.log(myObj[i])
}

//for in -array
for(const i of arr){
    //get the array key 
console.log(i);
//get the value
console.log(arr[i])
}

//Map is not iterable  -for in not possible 
//for-Each loop
const lang=["c++","java","python"]
lang.forEach( (item)=>{console.log(item)})
//forEach-parameter order item,index,array

//objects inside the array **************imp case
const mycoding=[
    {langName:"js",
    langFile:"jsFile"

},
    {langName:"py",
    langFile:"pyFile"

}
]
mycoding.forEach((item)=>{
    console.log(item.langName)
})
