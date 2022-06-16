export default function Controls(
    {
        buttonPause,
        buttonPlay,
        buttonSet,
        minutesAdd5,
        minutesReduce5,
        buttonDarkMode,
        buttonLightMode
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

    // function moreFiveMinutes(){

    // }

    // function lessFiveMinutes(){

    // }

    return{
        play,
        pause,
        stop,
        darkTheme,
        lightTheme,
        reset,
        inputMinutes
    }
}