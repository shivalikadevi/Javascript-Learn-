const form =document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    let result=document.querySelector('#result')
    if(height==''||height<0||isNaN(height)){
        result.innerHTML="Please give a vlaid height"
    }

   else if(weight==''||weight<0||isNaN(weight)){
        result.innerHTML="Please give a vlaid weight"
    }
    else{
        const bmi=((weight)/((height*height)/10000)).toFixed(2);
        result.innerHTML=`Your Current bmi is ${bmi}`
    }

})
// function calculateBmi()
// {
//     let weight=getWeight()
//     let height=getHeight()
//    let bmi= weight/(height*height)
//    document.getElementById('result').innerHTML=bmi

// }
// function getWeight(){
//     let weight=document.getElementById('weight').value
//     return weight
// }
// function getHeight(){
//     let weight=document.getElementById('height').value
//     return height/100
// }