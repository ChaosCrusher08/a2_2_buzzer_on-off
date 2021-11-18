input.onButtonPressed(Button.A, function () {
    basic.showString("Wake up")
    music.playTone(262, music.beat(BeatFraction.Breve))
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
