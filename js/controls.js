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
        page
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
        forestSound.classList.remove('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.remove('active')
        resetVolumeValues()
    }

    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        resetVolumeValues()
    }

    function buttonDarkTheme(){
        buttonDarkMode.classList.add('hide')
        buttonLightMode.classList.remove('hide')
    }

    function lightTheme(){
        page.classList.add('dark')
    }

    function buttonLightTheme(){
        buttonDarkMode.classList.remove('hide')
        buttonLightMode.classList.add('hide')
    }

    function darkTheme(){
        page.classList.remove('dark')
    
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
        resetVolumeValues()
        forestSound.classList.add('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.remove('active')
        
    }

    function rain(){
        resetVolumeValues()
        forestSound.classList.remove('active')
        rainSound.classList.add('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.remove('active')
        
    }

    function firePlace(){
        resetVolumeValues()
        forestSound.classList.remove('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.add('active')
        coffeeShopSound.classList.remove('active')
        
    }

    function coffeeShop(){
        resetVolumeValues()
        forestSound.classList.remove('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.add('active')
        
    }


    return{
        play,
        pause,
        stop,
        buttonDarkTheme,
        buttonLightTheme,
        darkTheme,
        lightTheme,
        reset,
        inputMinutes,
        rain,
        forest,
        coffeeShop,
        firePlace,
    }
}