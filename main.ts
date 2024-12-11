let Ishak = false
basic.forever(function () {
    Ishak = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 15
    if (Ishak) {
        cuteBot.stopcar()
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
        basic.pause(500)
        cuteBot.moveTime(cuteBot.Direction.right, 40, 1)
    } else {
        cuteBot.motors(50, 50)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
    }
})
