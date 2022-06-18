export default function Controls(
    {
        buttonPause,
        buttonPlay,
        buttonSet,
        buttonDarkMode,
        buttonLightMode,
        forestSound,
        rainSound,
        coffeeShopSound,
        firePlaceSound,
    }
){  
    function resetVolumeValues(){
        document.getElementById('coffeeshop').value = "0"
        document.getElementById('forest').value = "0"
        document.getElementById('rain').value = "0"
        document.getElementById('fireplace').value = "0"
    }

    function play(){
        buttonPause.classList.remove('hide')
        buttonPlay.classList.add('hide')
        buttonSet.classList.add('hide')
    }

    function pause(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function stop(){
        buttonSet.classList.remove('hide')
        resetVolumeValues()
    }

    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        resetVolumeValues()
    }

    function darkTheme(){
        buttonDarkMode.classList.add('hide')
        buttonLightMode.classList.remove('hide')
    }

    function lightTheme(){
        buttonDarkMode.classList.remove('hide')
        buttonLightMode.classList.add('hide')
    }

    function inputMinutes(){
        let userMinutes = prompt('Quantos minutos deseja?')
        if (!userMinutes){
            return
        }  else{
            return userMinutes
        }
    }
    
    function forest(){
        forestSound.classList.add('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.remove('active')
        
    }

    function rain(){
        forestSound.classList.remove('active')
        rainSound.classList.add('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.remove('active')
        
    }

    function firePlace(){
        forestSound.classList.remove('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.add('active')
        coffeeShopSound.classList.remove('active')
        
    }

    function coffeeShop(){
        forestSound.classList.remove('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.add('active')
        
    }


    return{
        play,
        pause,
        stop,
        darkTheme,
        lightTheme,
        reset,
        inputMinutes,
        rain,
        forest,
        coffeeShop,
        firePlace
    }
}