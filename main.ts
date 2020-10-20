controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    pause(2000)
    game.splash("Your heart rate is " + info.score() * 4)
})
game.splash("Press the A button to measure your heart rate")
info.setScore(0)
info.startCountdown(15)
