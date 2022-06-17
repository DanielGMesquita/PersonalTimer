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
        document.getElementById('coffeeshop').value = "0"
        document.getElementById('forest').value = "0"
        document.getElementById('rain').value = "0"
        document.getElementById('fireplace').value = "0"
    }

    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
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
        document.getElementById('coffeeshop').value = "0"
        document.getElementById('forest').value = "50"
        document.getElementById('rain').value = "0"
        document.getElementById('fireplace').value = "0"
    }

    function rain(){
        forestSound.classList.remove('active')
        rainSound.classList.add('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.remove('active')
        document.getElementById('coffeeshop').value = "0"
        document.getElementById('forest').value = "0"
        document.getElementById('rain').value = "50"
        document.getElementById('fireplace').value = "0"
        
    }

    function firePlace(){
        forestSound.classList.remove('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.add('active')
        coffeeShopSound.classList.remove('active')
        document.getElementById('coffeeshop').value = "0"
        document.getElementById('forest').value = "0"
        document.getElementById('rain').value = "0"
        document.getElementById('fireplace').value = "50"
    }

    function coffeeShop(){
        forestSound.classList.remove('active')
        rainSound.classList.remove('active')
        firePlaceSound.classList.remove('active')
        coffeeShopSound.classList.add('active')
        document.getElementById('coffeeshop').value = "50"
        document.getElementById('forest').value = "0"
        document.getElementById('rain').value = "0"
        document.getElementById('fireplace').value = "0"
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