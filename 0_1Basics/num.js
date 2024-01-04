const scrore =400
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(2))//used in precision of ecommerce value
const otherNo=23.456765432234
console.log(otherNo.toPrecision(3))
const othe=1123.456
console.log(othe.toPrecision(3))//it give expontial if the value doesnot see precision

const hunderds=10000000
console.log(hunderds.toLocaleString())//it will give us value seprated by commas as per american standards
console.log(hunderds.toLocaleString('en-IN'))
/**************MAths is javascript library */
console.log(Math.floor(2.34567))
console.log(Math.abs(-34))
console.log(Math.round(23.45))
console.log(Math.ceil(23.4))
console.log(Math.sqrt(23).toFixed(4))
console.log(Math.min(3,4,6,7,2))
console.log(Math.max(23,5,4))

/*Math .random*/
console.log(Math.random())//different value between 0 and 1
console.log(Math.random()*10+1) //between 1 to 10
const min=10
const max=20
console.log(Math.random()*(max-min+1)+min)//use for the value in between that standard formula