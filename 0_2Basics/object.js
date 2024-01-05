//singleton - by constructor
//Object.create
//object literals -2nd way
const symbol1 = Symbol("key1")
const symbol2 =Symbol("key2")
const jsuser={
    name:"hitesh",
    [symbol1]:"key1",
    "location":"jaipur",
    lastLoginDay:["monday","sunday"]
}

//ways to access object
//1)jsuer.email
//2) jsuser["email"] when we 
//To use symbol inside the object we have to use in []
console.log(jsuser.lastLoginDay)
console.log(jsuser["location"])
//locak value of object
//   Object.freeze(myuser)
//after that if we change value it will not reflect

jsuser.greeting = function(){
    console.log(`hello js user${this.name}`);
}
console.log(jsuser.greeting())

//singleton objects
const tinderUser= new Object();

tinderUser.id="2"
tinderUser.name="shivalika"
tinderUser.islogedin= true


const reqularUser ={
    email:"sono@gmail.com",
    fullname : {
        first:"shivalika",
        last:"gupta"
    }

}
console.log(reqularUser.fullname.first)
const obj1={1:"a",2:"b"}
const obj2={3: "c"}
const obje3={obj1,obj2}
console.log(obje3)//two objects inside a new object
const obj3=Object.assign({},obj1,obj2)//in this {}is optional but good approach to give
console.log(obj3)//combine both object once
//{ '1': 'a', '2': 'b', '3': 'c' } 
const ob3={...obj1,...obj2}
console.log(ob3)

const user=[
    {
        id:1,
        email:"shivalika@gmail.com"
    },
    {
        firstname:"shivalila"
    }
]
console.log(Object.keys(user[0]))
console.log(Object.values(user[0]))
console.log(Object.entries(tinderUser))
console.log(jsuser.hasOwnProperty('isloged'))
const course={
    courseInstructor:"hitesh",
    price:2000
}
//if we want tp use courseInstricto many place we feel it quite lengthy so use below
console.log(course.courseInstructor)//it is quite lengthy
const {courseInstructor:instructor}=course //this is called object destructring

// //in react object destructuring is must
// const navbar =({company}) =>{

// }//here we can write props inside curly braces but we can also write the name

// navbar(company="hitesh")


//API CONCEPT    -how to get and post value in backend

