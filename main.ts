input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 100)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 50)
})
let millig = 0
let direction = 1
let angle = 0
pins.servoWritePin(AnalogPin.P1, angle)
basic.forever(function () {
    angle += direction
    pins.servoWritePin(AnalogPin.P1, angle)
    millig = input.acceleration(Dimension.X)
    angle = pins.map(
    millig,
    -1023,
    1023,
    0,
    180
    )
    if (angle >= 180 || angle <= 0) {
        direction = direction * -1
    }
})
