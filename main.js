let wordInput=document.querySelector("#word-input")
let currentWord=document.querySelector("#current-word")
let scoreDisplay=document.querySelector("#score")
let timeDisplay=document.querySelector("#time")
let message=document.querySelector("#message")

let time=5
let score=0

//Array of Words
const words=['hello',
'download',
'magic',
'basics',
'calculate',
'developer',
'statue',
'laughter',
'master',
'exercise',
'cocktail',
'website',
'college',
'establishment',
'gadgets',
'campus',
'teachers',
'javascript',
'investigate',
'definition',
'runaway',
'provoke',
'nostalgia',
'siblings',
'mobile',
'messenger',
'bootstrap',
'horrendous',
'nutrition',
'keys',
'river',
'banking',
'government',
'hero',
'students',
'actor',
'performance',
'hilarious',
'names',
'curtain',
'profession',
'almirah',
'funny'];

window.addEventListener("DOMContentLoaded",init)

function init(){
    showWord(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countDown,1000)
    setInterval(checkStatus,50)
}

function showWord(words){
    const randomIndex=Math.floor(Math.random()*words.length)
    currentWord.innerHTML=words[randomIndex]
}

function startMatch(){
    if(matchWords()){
        showWord(words)
        wordInput.value=''
        message.innerHTML="Correct!!"
        score++;
        time=6
    }
    else{
        message.innerHTML="InCorrect!!!"
    }
    scoreDisplay.innerHTML= score
}

function matchWords(){
    if(currentWord.innerHTML===wordInput.value){
        return true;
    }else{
        return false;
    }
}

function countDown() {
    if(time>0)
    time--;
timeDisplay.innerHTML=time
}

function checkStatus(){
    if(time===0)
    message.innerHTML="GAME OVER!!"
}