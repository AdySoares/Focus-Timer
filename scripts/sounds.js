export function sounds(){
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimerAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bg = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  bg.loop = true

  function PressAudio(){
    buttonPressAudio.play()
  }


  function kitchenTimer(){
    kitchenTimerAudio.play()
  }

  function bgAudioPlay(){
    bg.play()
  }
  
  function bgAudioPause(){
    bg.pause()
  }

  return {
    PressAudio,
    kitchenTimer,
    bgAudioPlay,
    bgAudioPause,
  }
}