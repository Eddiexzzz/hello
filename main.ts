input.onButtonPressed(Button.A, function () {
    variable += 1
})
input.onButtonPressed(Button.B, function () {
    variable += -1
})
let variable = 0
basic.forever(function () {
    basic.showNumber(variable)
})
