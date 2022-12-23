import { sounds } from "./sounds.js"
export function clock({
  hud,
  timerCard,
  minutesSet,
}){
  

  let timerId

  function updateMinutesDisplay(minutes,seconds){
    timerCard.minutesDisplay.textContent = String(minutes).padStart(2, '0')
    timerCard.secondsDisplay.textContent = String(seconds).padStart(2,'0')
  }

  function contDown(){
    timerId = setTimeout(() => {
        let seconds = Number(timerCard.secondsDisplay.textContent)
        let minutes = Number(timerCard.minutesDisplay.textContent)
  
        if(seconds <= 0){
            seconds = 60
            if(minutes <= 0){
                hud.RunAndStop()
                updateMinutesDisplay(minutesSet,0)
                sounds().kitchenTimer()
                return
            }
          timerCard.minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
        }
        timerCard.secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
        contDown()
    
    },1000)
  }
  function stopClock(){
    clearTimeout(timerId)
    updateMinutesDisplay(minutesSet, 0)
  }

  function updateMinutes(newMinutes){
    minutesSet = newMinutes
  
    return minutesSet
  }

  function pause(){
    clearTimeout(timerId)
  }

  return {
    contDown,
    stopClock,
    updateMinutes,
    pause,
    updateMinutesDisplay
  }
 
}