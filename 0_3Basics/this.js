//this keyword is used to refe current context 
//like the thing mentioned here
const ob={
    name:"shivalika",
    age:"21",
    fxn:function(){
        console.log(`we welcome you miss ${this.name}`);
        console.log(this)
    }
}
// ob.fxn()
// ob.name="shivam"
// ob.fxn()
//arrow function doesnot have this 
console.log(this) //on node this give empty but on browser this return window object
//in browser global object is windows

function chai (){
    
    console.log(this);//cannot use this inside the function it return the global object
}
function chai1 (){
    username="shivalika"
console.log(this.username)
}
chai()  //we get so many values here
chai1()

//arrow functions
const fxn =()=>{
    let username="hitesh"
    console.log(this.username)
}


fxn()

const addTwo =(num1,num2)=>{return num1+num2;}
console.log(addTwo)


//implicit return of arrow function
const addTwoImplict = (num1,num2) => num1+num2 //no need to write return here 
console.log(addTwoImplict(2,3))
//to return object we need to add oaranthesis
const addTwoImplictObjectReturn = (num1,num2) => ({num1:num1,num2:num2})
console.log(addTwoImplictObjectReturn(2,3))

