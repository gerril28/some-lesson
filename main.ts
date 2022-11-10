input.onButtonPressed(Button.A, function () {
    number += -1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    list.unshift(number)
})
input.onButtonPressed(Button.B, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= list.length - 1; index++) {
        basic.showNumber(list[index])
    }
})
let list: number[] = []
let number = 0
number = 0
basic.showNumber(number)
list = []
basic.forever(function () {
	
})
