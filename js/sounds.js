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

    function volumeStandardSet(){
        rain.volume = 0.5
        forest.volume = 0.5
        coffeeShop.volume = 0.5
        firePlace.volume = 0.5
        document.getElementById('coffeeshop').value = "0"
        document.getElementById('forest').value = "0"
        document.getElementById('rain').value = "0"
        document.getElementById('fireplace').value = "0"
    }

    volumeStandardSet()

    function rainVolumeSet(){
        let volume = rain.volume
        rainVolume.value = String(rain.volume*100)
        rainVolume.addEventListener('change', function(){
            rain.volume = rainVolume.value/100
            volume = rain.volume
            return volume
        })
        rain.volume = volume
    }
    
    function forestVolumeSet(){
        let volume = forest.volume
        forestVolume.value = String(forest.volume*100)
        forestVolume.addEventListener('change', function(){
            forest.volume = forestVolume.value/100
            volume = forest.volume
            return volume
        })
        forest.volume = volume
    }

    function firePlaceVolumeSet(){
        let volume = firePlace.volume
        firePlaceVolume.value = String(firePlace.volume*100)
        firePlaceVolume.addEventListener('change', function(){
            firePlace.volume = firePlaceVolume.value/100
            let volume = firePlace.volume
            return volume
        })
        firePlace.volume = volume
    }

    function coffeeShopVolumeSet(){
        let volume = coffeeShop.volume
        coffeeShopVolume.value = String(coffeeShop.volume*100)
        coffeeShopVolume.addEventListener('change', function(){
            coffeeShop.volume = coffeeShopVolume.value/100
            let volume = coffeeShop.volume
            return volume
        })
        coffeeShop.volume = volume
    }



    function pressButton(){
        buttonPressAudio.play()
    }

    function endAlert(){
        endSound.play()
        stopSound()
    }

    function pressForestButton(){
        volumeStandardSet()
        rain.pause()
        firePlace.pause()
        coffeeShop.pause()
        forest.play()
        forestVolumeSet()
    }

    function pressCoffeeShopButton(){
        volumeStandardSet()
        rain.pause()
        firePlace.pause()
        coffeeShop.play()
        forest.pause()
        coffeeShopVolumeSet()
    }

    function pressFirePlaceButton(){
        volumeStandardSet()
        rain.pause()
        firePlace.play()
        coffeeShop.pause()
        forest.pause()
        firePlaceVolumeSet()
    }

    function pressRainButton(){
        volumeStandardSet()
        rain.play()
        firePlace.pause()
        coffeeShop.pause()
        forest.pause()
        rainVolumeSet()
    }

    function stopSound(){
        volumeStandardSet()
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
        volumeStandardSet
    }
}