import sounds from "./sounds.js"
export default function({
    minutesDisplay,
    secondsDisplay,
    resetControls
}){
    let minutes = Number(minutesDisplay.textContent)
    let endTimer

    function reset(){
        updateMinutes(minutes)
        updateDisplay(minutes, 0)
        clearTimeout(endTimer)
    }

    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        secondsDisplay.textContent = String(seconds).padStart(2,0)
        minutesDisplay.textContent = String(newMinutes).padStart(2,0)
    }

    function countDown(){
        endTimer = setTimeout(function(){
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            let timerFinished = minutes <= 0 && seconds <= 0

            secondsDisplay.textContent = String(seconds-1).padStart(2,0)
            updateDisplay(minutes, 0)

            if(timerFinished){
                resetControls()
                updateDisplay()
                sounds().stopSound()
                sounds().endAlert()
                return
            }

            if(seconds <= 0){
                seconds = 3;
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countDown()
        },1000)
    }

    function pause(){
        clearTimeout(endTimer)
    }

    function updateMinutes (newMinutes){
        minutes = newMinutes
    }

    // function moreFiveMinutes(newMinutes){
    //     minutes += 5
    //     newMinutes = newMinutes === undefined ? minutes : newMinutes
    //     minutesDisplay.textContent = String(newMinutes).padStart(2,0)
    // }

    // function lessFiveMinutes(newMinutes){
    //     minutes -= 5
    //     newMinutes = newMinutes === undefined ? minutes : newMinutes
    //     minutesDisplay.textContent = String(newMinutes).padStart(2,0)
    // }

    return{
        countDown,
        pause,
        updateMinutes,
        updateDisplay,
        reset,
        // moreFiveMinutes,
        // lessFiveMinutes
    }

}

