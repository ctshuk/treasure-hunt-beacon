radio.setGroup(1)
radio.setTransmitPower(1)
let id = 1
basic.showNumber(id)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    radio.sendNumber(id)
    basic.pause(200)
})
