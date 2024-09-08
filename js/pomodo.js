const btnPlay= document.querySelector('.btn-play')
const btnPause= document.querySelector('.btn-pause')
const btnStop=document.querySelector('.btn-stop')
const btnPlus= document.querySelector('.btn-plus')
const audioPlay=document.querySelector('.audio-play')
const audioMute=document.querySelector('.audio-mute')
const modalBTN=document.querySelector('#modalBTN')
const modalAdd=document.querySelector('#modalADD')
const modalID=document.querySelector('#modalID')
const app = document.querySelector('.app')
const modalMinuts = document.querySelector('.modal')
const display = document.querySelector('#display')
let player
let [minutes,seconds]=display.textContent.split(':')
console.log(minutes,seconds)
let timeTimerOut
let minutsTimer=Number(minutes)
let secondsTimer=Number(seconds)
function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutsTimer : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    let minutesDisplay=String(newMinutes).padStart(2,'0')
    let secondsDisplay=String(seconds).padStart(2,"0")
    display.textContent=`${minutesDisplay}:${secondsDisplay}`
}  
function countDown(){
    timeTimerOut=setTimeout(function(){
       
        if(minutsTimer<=0 && secondsTimer<=0){
            resetControls()
           return
        }
        if (secondsTimer <= 0) {
            minutsTimer--; 
            secondsTimer = 59;  
        } else {
            secondsTimer--;  
        }
        updateDisplay(minutsTimer, secondsTimer)
        countDown()
    },1000)
}

function play(){
    btnPlay.addEventListener('click',(e)=>{
        btnPlay.classList.add('hide')
        btnPlus.classList.add('hide')
        btnPause.classList.remove('hide')
        btnStop.classList.remove('hide')
        countDown()
     })

}

function pause(){
    btnPause.addEventListener('click',()=>{
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
        clearTimeout(timeTimerOut)
    })
}

function resetControls(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnStop.classList.add('hide')
    btnPlus.classList.remove('hide')
}

function addMinuts(){

    btnPlus.addEventListener('click',()=>{
    app.classList.add('modal-open')
    modalMinuts.classList.remove('hide')
    
    })

    modalAdd.addEventListener('click',()=>{
        let newMinutes=String(modalID.value)
        if(Number(minutes)==60 ){
            newMinutes=String(60)
        }
        if(modalID.value==''){
            newMinutes=minutes
        }
        minutsTimer=Number(newMinutes)
        updateDisplay(minutsTimer, seconds)
         app.classList.remove('modal-open')
         modalMinuts.classList.add('hide')
    })
}


function closeModal(){
    modalBTN.addEventListener('click',()=>{
    app.classList.remove('modal-open')
    modalMinuts.classList.add('hide')
    })
}
function stop(){
    btnStop.addEventListener('click',()=>{
    resetControls()
    clearTimeout(timeTimerOut)
    minutsTimer = Number(minutes); 
    secondsTimer = Number(seconds); 
    updateDisplay(minutsTimer,secondsTimer)
    })
}
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'JWlKA9wmO64',
        playerVars:{
        },
        events: {
            'onReady': playAudio
        }
    });
}
function playAudio (event){
    audioPlay.addEventListener('click',()=>{
        audioPlay.classList.add('hide')
        audioMute.classList.remove('hide')
        player.playVideo()
    })
}

function muteAudio (){
    audioMute.addEventListener('click',()=>{
        audioPlay.classList.remove('hide')
        audioMute.classList.add('hide')

        player.pauseVideo()
    })
}




export function controls(){
    play()
    pause()
    stop()
    playAudio()
    muteAudio()
    onYouTubeIframeAPIReady()
    addMinuts()
    closeModal()

    }