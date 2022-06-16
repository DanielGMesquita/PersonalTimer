export default function(){
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const endSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const rain = new Audio("sounds/Chuva.wav")
    const firePlace = new Audio("sounds/Lareira.wav")
    const coffeeShop = new Audio("sounds/Cafeteria.wav")
    const forest = new Audio("sounds/Floresta.wav")
    rain.loop = true
    firePlace.loop = true
    coffeeShop.loop = true
    forest.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }

    function endAlert(){
        endSound.play()
    }

    return{
        rain,
        firePlace,
        coffeeShop,
        forest,
        pressButton,
        endAlert
    }
}