//for loop

for(let i=0;i<10;i++){
    console.log(i);
    if(i==5)console.log("5 is best number")
}

for(let i=0;i<10;i++){

    for(let j=0;j<4;j++){
        console.log(`outerloop ${i} inner loop ${j}`)
    }
}


let i=0
while(i<10){
    console.log(i)
    i++
}
let j=0
do{
    console.log(j);
    j++
}while(j<4)