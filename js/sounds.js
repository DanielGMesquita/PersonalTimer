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



    rain.volume = 0.5,
    forest.volume = 0.5,
    coffeeShop.volume = 0.5,
    firePlace.volume = 0.5




    function rainVolumeSet(){
        forest.volume = 0.5
        coffeeShop.volume = 0.5
        firePlace.volume = 0.5
        rainVolume.value = String(rain.volume*100)
        rainVolume.addEventListener('change', function(){
            rain.volume = rainVolume.value/100
        })
        
    }
    
    function forestVolumeSet(){
        rain.volume = 0.5
        coffeeShop.volume = 0.5
        firePlace.volume = 0.5
        forestVolume.value = String(forest.volume*100)
        forestVolume.addEventListener('change', function(){
            forest.volume = forestVolume.value/100
        })
    }

    function firePlaceVolumeSet(){
        rain.volume = 0.5
        forest.volume = 0.5
        coffeeShop.volume = 0.5
        firePlaceVolume.value = String(firePlace.volume*100)
        firePlaceVolume.addEventListener('change', function(){
            firePlace.volume = firePlaceVolume.value/100
        })
    }

    function coffeeShopVolumeSet(){
        rain.volume = 0.5
        forest.volume = 0.5
        firePlace.volume = 0.5
        coffeeShopVolume.value = String(coffeeShop.volume*100)
        coffeeShopVolume.addEventListener('change', function(){
            coffeeShop.volume = coffeeShopVolume.value/100
        })
    }

    function pressButton(){
        buttonPressAudio.play()
    }

    function endAlert(){
        endSound.play()
    }

    function pressForestButton(){
        rain.pause()
        firePlace.pause()
        coffeeShop.pause()
        forest.play()
        forestVolumeSet()
    }

    function pressCoffeeShopButton(){
        rain.pause()
        firePlace.pause()
        coffeeShop.play()
        forest.pause()
        coffeeShopVolumeSet()
    }

    function pressFirePlaceButton(){
        rain.pause()
        firePlace.play()
        coffeeShop.pause()
        forest.pause()
        firePlaceVolumeSet()
    }

    function pressRainButton(){
        rainVolumeSet()
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
        stopSound,
        rainVolumeSet,
        forestVolumeSet,
        firePlaceVolumeSet,
        coffeeShopVolumeSet
    }
}