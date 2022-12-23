
import {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnSoundOn,
  btnSoundOff,
  timerCard,
  hud,
} from "./elements.js"


export default function events({control, Audio, timer, minutesSet}){
  btnPlay.addEventListener('click', () => {
    hud.RunAndStop()
    timer.contDown(timer.updateMinutes(minutesSet))
    Audio.PressAudio()
  })
  
  btnStop.addEventListener('click', () => {
    hud.RunAndStop()
    timer.stopClock(timer.updateMinutes(minutesSet))
    Audio.PressAudio()
  })
  
  btnSet.addEventListener('click', () => {
    let newMinutes = control.getMinutes()
    if(!newMinutes){
        timerCard.minutesDisplay.textContent = String(minutesSet).padStart(2, '0') 
        return
    }
    minutesSet = newMinutes
    timer.updateMinutesDisplay(minutesSet,0)
    Audio.PressAudio()
  })
  
  btnPause.addEventListener('click', () => {
    timer.pause()
    hud.RunAndStop()
    Audio.PressAudio()
  })
  
  btnSoundOn.addEventListener('click',() => {
    btnSoundOn.classList.toggle('hide')
    btnSoundOff.classList.toggle('hide')
    Audio.bgAudioPlay()
  })
  btnSoundOff.addEventListener('click',() => {
    btnSoundOn.classList.toggle('hide')
    btnSoundOff.classList.toggle('hide')
    Audio.bgAudioPause()
  })
}