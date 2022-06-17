import Events from "./events.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonLightMode,
    buttonDarkMode,
    minutesDisplay,
    secondsDisplay,
    rainSound,
    forestSound,
    firePlaceSound,
    coffeeShopSound
} from "./elements.js"

const sound = Sound()

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonLightMode,
    buttonDarkMode,
    rainSound,
    forestSound,
    firePlaceSound,
    coffeeShopSound
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

Events({controls, timer, sound})
