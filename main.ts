input.onButtonPressed(Button.A, function () {
    defender.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    defender.change(LedSpriteProperty.X, 1)
})
let alien: game.LedSprite = null
let defender: game.LedSprite = null
defender = game.createSprite(2, 4)
let alien_speed = 1000
basic.forever(function () {
    basic.pause(100)
    alien = game.createSprite(randint(0, 4), 0)
    while (true) {
        basic.pause(alien_speed)
        alien.change(LedSpriteProperty.Y, 1)
        if (alien.isTouching(defender)) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
            alien.delete()
            game.addScore(1)
            alien_speed += -50
            break;
        }
        if (alien.get(LedSpriteProperty.Y) == 4) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
            basic.pause(1000)
            basic.showNumber(game.score())
            game.gameOver()
        }
    }
})
