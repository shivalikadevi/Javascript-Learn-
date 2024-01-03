const accountId =145678;
//change const not allowed
let accountEmail ="shivalika.manu@gmail.com";
//elements limit to scope ex accountEmail is only valid in that function it is declared 
var accountCity= "jaipur" 
//var has issue with block and functional scope 
//Assgin that to memory as soon as the varible is shown we get the error
console.table([accountCity,accountEmail,accountId])
//console.table for printing details in tabular form
console.log(typeof accountCity)
let score =33
console.log(typeof score)
let valueInNumber =Number(score)
console.log(typeof valueInNumber)
//number get converted easily
//33abc cannot converted to number -NaN  type- number 
//true => 1 false =>0
 let isloggedIn =1
 let newLogedIn =Boolean(isloggedIn)
 console.log(typeof newLogedIn)


 let someStr=33
 letcon=String(someStr)
 console.table([letcon,typeof letcon])


