const btnPlay = document.querySelector('#PlayCircle')
const btnPause = document.querySelector('#PauseCircle')
const btnSet = document.querySelector('#StopWatch')
const btnStop = document.querySelector('#StopCircle')
const btnSoundOn = document.querySelector('#SoundOn')
const btnSoundOff = document.querySelector('#SoundOff')
const timerCard = {
    secondsDisplay: document.querySelector('#seconds'),
    minutesDisplay: document.querySelector('#minutes')
}
const hud = {
    run: document.querySelector('#Run'),
    stop: document.querySelector('#Stop'),

    RunAndStop(){
        hud.run.classList.toggle('hide')
        hud.stop.classList.toggle('hide')
    }
}


export{
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnSoundOn,
  btnSoundOff,
  timerCard,
  hud,
}