//if else 
if(2==2){
    console.log("equal value")
}
else{
    console.log("not equal values")
}

//nesting if else
let balance=100
if(balance>500){
    console.log("balance less than 500")
}
else if(balance<750){
    console.log("balance less than 750")
}
else {
    console.log("low balance")
}
//switch
let key=4
switch(key){
    
    case 1:console.log("Feb")
    break;
    case 2:console.log("Feb")
    break;
    case 3:console.log("March")
    break;
    case 4:console.log("April")
    break;
    case 5:console.log("May")
    break;
    case 6:console.log("June")
    break;
    case 7:console.log("July")
    break;
    case 8:console.log("August")
    break;
    case 9:console.log("September")
    break;
    case 10:console.log("oct")
    break;
    case 11:console.log("nov")
    break;
    case 12:console.log("dec")
    break;
    default:console.log("not valid month")
    break;
}

//falsy values -false,0,"",-0,BigInt 0n,null,undefined,NaN
//thruthy-all other 

//nullish coalescing operator(??): null undefined
let val1;
val1= null??10;
val2 =undefined??15
//ist value assigned useful to handle errors 
//nulleish is differnt from ternary operator

//condition?true:false


