//filter return the value and take the callback

let num=[1,2,3,4,5,6,7,8,9]
// const newNum=num.filter((item)=>{
//     return item>4
// })

const newNum=[]
num.forEach((item)=>{
    if(num>4)newNum.push(item)
})

const book=[
    {
    title:'bookOne',genre:'Fiction',publish:1981,edition:2004
},
    {
    title:'booktwo',genre:'NonFiction',publish:1941,edition:2044
}
]
let userBooks=book.filter((item)=>{
   
    return item.genre=='NonFiction'
})


console.log(userBooks)

 userBooks=book.filter((item)=>{
   
    return item.publish>1940
})
console.log(userBooks)



//Map

const myNum=[1,2,3,4,5,6,7]
const nNum=myNum.map((item)=>{return item+10})
//chaining
const nnum=myNum
.map((num)=>num*10)
.map((item)=>item+1).filter((item)=>{return item<60})
console.log(nnum)



//reduce (accumulator -first value with every time reduce,current value)
 num=[1,2,3]
 let acc=3
 const myTotal=num.reduce((acc,item)=>{return acc+item},0)
 console.log(myTotal)