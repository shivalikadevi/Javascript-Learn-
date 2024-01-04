"use strict"; //treat all code as newer version
//alert(3+3);//we are using node.js not browser so we cannot use it
//types of datatypes in javascript
//number = range in between 2 to power 33
//bigint 
//string =""
//boolean =true/false
//null =standalone value
//undefined
//symbol=unique
//object
const obj={name:"John",age:30};
console.log(typeof(obj))
/*type of datatype on basis of how they are stored in memory
1)Primitive -Number,String,Float,Boolean,Undefined,Null,Symbol(to make value unique),Bigint-call by value
2) NonPrimitive - call by reference (Reference type)-array,objects ,functions  

*/

const id =234
const anotherId=Symbol(id)
console.log(id==anotherId)//return false

//reference type
//array in []  object in {}
const arr=[1,2,3,5]
let object ={"name":"shivalika","age":23}

var fxn=function(){console.log("hello world")}();
//null has typeof-object
//bigint has typeof-undefined


//memory 
//1 stack-primitive data type -we get copy
 //2 heap-non primitive data type
 let name ="shivalika"
 let anothername =name
 anothername="shiva"
 console.log("name",name)//we give a copy to another name that's why it is not changed
 console.log("anotherName" ,anothername)//here we get copy so its value got changes 
 console.log(name==anothername)

 //check same concept for object to
 let obj1={"name":"shivalika","age":21}
 let obj2=obj1;
 obj2.name="shiva"
 console.log(obj1)
 console.log(obj2)
 console.log(obj1==obj2)