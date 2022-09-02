input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 100)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 50)
})
let angle = 0
let millig = 0
basic.pause(500)
pins.servoWritePin(AnalogPin.P1, 90)
basic.forever(function () {
    millig = input.acceleration(Dimension.X)
    angle = pins.map(
    millig,
    -1023,
    1023,
    0,
    180
    )
    pins.servoWritePin(AnalogPin.P0, angle)
})
