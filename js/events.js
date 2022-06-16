import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonDarkMode,
    buttonLightMode


} from "./elements.js"

export default function ({controls, timer, sound}){
    buttonPlay.addEventListener('click', function(){
        controls.play()
        timer.countDown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click', function(){
        controls.pause()
        timer.pause()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', function(){
        controls.stop()
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonSet.addEventListener('click',function(){
        sound.pressButton()
        let newMinutes = controls.inputMinutes()
        if(!newMinutes){
            timer.reset()
            return
        }
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

    buttonDarkMode.addEventListener('click',function(){
        sound.pressButton()
        controls.darkTheme()
    })

    buttonLightMode.addEventListener('click',function(){
        sound.pressButton()
        controls.lightTheme()
    })
}