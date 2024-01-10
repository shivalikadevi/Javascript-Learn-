let datetime=document.querySelector('#datetime')
setInterval(function(){
let date =new Date().toLocaleString();

let time=date.split(',')
console.log(time)
datetime.innerHTML=`The current date is <span><i><strong>${time[0]}</i><strong><span> <br>The current time is <span><i><strong>${time[1]}</i><strong><span>`
},1000)