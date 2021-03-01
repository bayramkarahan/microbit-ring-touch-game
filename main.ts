let dukunmasayisi = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0) == true) {
        dukunmasayisi += 1
    }
    if (dukunmasayisi > 4) {
        dukunmasayisi = 0
        game.gameOver()
    }
    if (input.buttonIsPressed(Button.A)) {
        dukunmasayisi = 0
    }
    basic.showNumber(dukunmasayisi)
})
