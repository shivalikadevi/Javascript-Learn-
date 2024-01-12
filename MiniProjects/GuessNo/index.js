let randomNo=parseInt(Math.random()*100+1)
let sub=document.querySelector('#submit')
let userInput=document.querySelector('#userInput')
const guesses=document.querySelector('#guesses')
const lastGuess=document.querySelector('#lastGuess')
const tryiny=document.querySelector('#try')
const p=document.createElement('p')
let prevGuess=[]
let numGuess=1
let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        console.log(e)
        let guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);
    })
}
 function validateGuess(guess){
    if(isNaN(guess))alert('please eneter a valid no')
    if(guess>0&&guess<100){
        prevGuess.push(guess)
        if(numGuess===11){displayGuess(guess)
        displayMessage(`game over.Random number  was ${randomNumber}`)
    endGame()}
    else{
        displayGuess(guess)
        checkGuess(guess)

    }
       
    }
    else{alert('Enter a no between 1 to 100')}

    
}
function checkGuess(guess){
    if(guess==randomNo){
        displayMessage(`your guesses right`)
        endGame()
    }
    else if(guess<randomNo){
        displayMessage(`No is too low ${guess}`)
    }
    else{
        displayMessage(`No is to high ${guess}`)
    }

}
function displayMessage(message){


}
function displayGuess(guess){
    userInput.value=''
    guesses.innerHTML+=`   ${guess}    `
    numGuess++
    let no =11-numGuess
    tryiny.innerHTML=` ${no} `


}

function displayMessage(message){
    lastGuess.innerHTML=`<h2>${message}</h2>` 
}
 
function endGame(){
    //clear userInput
    userInput=''
    userInput.setAttribute('disabled','true')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    
    startOver.appendChild(p)
    playGame=false
    newGame();
}
function newGame(){
    const newGameButton =document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
    
       randomNo=parseInt(Math.rndom()*100+1)
       prevGuess=[]
       numGuess=1
       guess.innerHTML=''
       remaing.innerHTML=`11`
       userInput.removeAttribute('disabled')
       startOver.removeChild(p);
        playGame=true
    })
}