//date is defined ad janurary 1,1970 ,utc //temporal api that is proposal 

let mydate= new Date();
console.log(mydate)//give a date in format 2024-01-04T02:28:04.798Z
console.log(mydate.toString()) //Thu Jan 04 2024 07:58:04 GMT+0530 (India Standard Time)
console.log(mydate.toISOString())//2024-01-04T02:28:56.034Z
console.log(mydate.toJSON())//2024-01-04T02:29:18.166Z
console.log(mydate.toLocaleString())//4/1/2024, 8:00:15 am
console.log(mydate.toLocaleDateString())//4/1/2024
console.log(mydate.toLocaleTimeString())//8:01:02 am
console.log(typeof mydate)//object

let myCreateDate=new Date(2020,0,23)//month start with 0 in javascript
console.log(myCreateDate.toString())//Thu Jan 23 2020 00:00:00 GMT+0530 (India Standard Time)
let myD=new Date(2023,5,67,3,4)//Sun Aug 06 2023 03:04:00 GMT+0530 (India Standard Time)
//here above the 67 date is converted to 30+30+7
//5+1+1=7=>August and the left over date is 6
console.log(myD.toString())
let dateT=new Date("2023-01-13")//heree month start from 1
let d= new Date("01-14-2023")
//timstamps
let mytimestamp =Date.now();
console.log(mytimestamp)//in milliseconds seconds 
console.log(myD.getTime())//in milliseconds second from 1 jan 1970 0-0-0
console.log(Math.floor(Date.now()/1000))//interview questuon to get the current seconds of now date frm 1 jan 1970
//newD.toLocaleString('default',{ weekday:"long"})

