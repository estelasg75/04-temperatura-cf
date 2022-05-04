basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + convertToText(input.temperature()) + "ºC")
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + convertToText(input.temperature() * 9 / 5 + 32) + "F")
    }
})
