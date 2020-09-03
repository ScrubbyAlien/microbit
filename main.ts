input.onButtonPressed(Button.A, function () {
    PlayerAWins += 1
    basic.showString("A")
    basic.showNumber(PlayerAWins)
    basic.clearScreen()
})
function displayScores () {
    basic.showString("A")
    basic.showNumber(PlayerAWins)
    basic.pause(1000)
    basic.showString("B")
    basic.showNumber(PlayerBWins)
    basic.pause(1000)
    basic.showString("T")
    basic.showNumber(PlayerBWins)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Rounds")
    basic.showNumber(PlayerAWins + (PlayerBWins + PlayersTie))
    basic.pause(1000)
}
input.onButtonPressed(Button.AB, function () {
    PlayersTie += 1
    basic.showString("T")
    basic.showNumber(PlayersTie)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    PlayerBWins += 1
    basic.showString("B")
    basic.showNumber(PlayerBWins)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    displayScores()
    PlayerAWins = 0
    PlayerBWins = 0
    PlayersTie = 0
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
let PlayersTie = 0
let PlayerBWins = 0
let PlayerAWins = 0
basic.clearScreen()
PlayerAWins = 0
PlayerBWins = 0
PlayersTie = 0
