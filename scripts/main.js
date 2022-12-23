import { clock } from "./clock.js"
import { controls } from "./controls.js"
import { sounds } from "./sounds.js"
import Events from "./events.js"
import {
    timerCard,
    hud,
  } from "./elements.js"

let minutesSet = timerCard.minutesDisplay.textContent

const timer = clock({
    hud,
    timerCard,
    minutesSet,
})

const Audio = sounds()

const control = controls()

Events({control, Audio, timer, minutesSet})

