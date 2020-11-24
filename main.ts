basic.forever(function () {
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(y, 4 - x)
            led.plot(x, 4 - y)
        }
        basic.pause(200)
    }
    basic.clearScreen()
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - x, 4 - y)
            led.plot(4 - y, 4 - x)
        }
        basic.pause(200)
    }
    basic.clearScreen()
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(0 + x, y)
            led.plot(0 + y, x)
        }
        basic.pause(200)
    }
    basic.clearScreen()
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - x, y)
            led.plot(4 - y, x)
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
