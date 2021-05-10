function hightlightOn () {
    led.plotBrightness(lighght % 5, lighght / 5, 69)
}
function hightlightOff () {
    if (led.pointBrightness(lighght % 5, lighght / 5) <= 69) {
        led.unplot(lighght % 5, lighght / 5)
    }
}
input.onButtonPressed(Button.A, function () {
    if (led.pointBrightness(lighght % 5, lighght / 5) <= 90) {
        led.plot(lighght % 5, lighght / 5)
        value = value + multiplier
    } else {
        led.toggle(lighght % 5, lighght / 5)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(value)
    reset()
})
input.onButtonPressed(Button.B, function () {
    hightlightOff()
    lighght += -1
    multiplier = multiplier * 2
    hightlightOn()
})
function reset () {
    basic.pause(1000)
    basic.clearScreen()
    lighght = 24
    multiplier = 1
    value = 0
    hightlightOn()
}
let value = 0
let multiplier = 0
let lighght = 0
lighght = 24
multiplier = 1
value = 0
hightlightOn()
