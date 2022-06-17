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
    
    const rainVolume = document.getElementById('rain')
    const forestVolume = document.getElementById('forest')
    const coffeeShopVolume = document.getElementById('coffeeshop')
    const firePlaceVolume= document.getElementById('fireplace')

    coffeeShopVolume.value = '0'
    forestVolume.value = "0"
    rainVolume.value = "0"
    firePlaceVolume.value = "0"

    rainVolume.addEventListener('change', function(){
        rain.volume = rainVolume.value/100
    })

    forestVolume.addEventListener('change', function(){
        forest.volume = forestVolume.value/100
    })

    coffeeShopVolume.addEventListener('change', function(){
        coffeeShop.volume = coffeeShopVolume.value/100
    })

    firePlaceVolume.addEventListener('change', function(){
        firePlace.volume = firePlaceVolume.value/100
    })

    function pressButton(){
        buttonPressAudio.play()
    }

    function endAlert(){
        endSound.play()
        stopSound()
    }

    function pressForestButton(){
        rain.pause()
        firePlace.pause()
        coffeeShop.pause()
        forest.play()
    }

    function pressCoffeeShopButton(){
        rain.pause()
        firePlace.pause()
        coffeeShop.play()
        forest.pause()
    }

    function pressFirePlaceButton(){
        rain.pause()
        firePlace.play()
        coffeeShop.pause()
        forest.pause()
    }

    function pressRainButton(){
        rain.play()
        firePlace.pause()
        coffeeShop.pause()
        forest.pause()
    }

    function stopSound(){
        rain.pause()
        firePlace.pause()
        coffeeShop.pause()
        forest.pause()
    }

    return{
        pressCoffeeShopButton,
        pressFirePlaceButton,
        pressForestButton,
        pressRainButton,
        pressButton,
        endAlert,
        stopSound
    }
}