import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonDarkMode,
    buttonLightMode,
    minutesAdd5,
    minutesReduce5,
    firePlaceSound,
    coffeeShopSound,
    rainSound,
    forestSound
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
        sound.stopSound()
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

    minutesAdd5.addEventListener('click', function(){
        sound.pressButton()
        timer.moreFiveMinutes()
    })

    minutesReduce5.addEventListener('click', function(){
        sound.pressButton()
        timer.lessFiveMinutes()
    })

    coffeeShopSound.addEventListener('click',function(){
        controls.coffeeShop()
        sound.pressCoffeeShopButton()
    })

    firePlaceSound.addEventListener('click', function(){
        controls.firePlace()
        sound.pressFirePlaceButton()
    })

    rainSound.addEventListener('click', function(){
        controls.rain()
        sound.pressRainButton()

    })

    forestSound.addEventListener('click', function(){
        controls.forest()
        sound.pressForestButton()
    })
}