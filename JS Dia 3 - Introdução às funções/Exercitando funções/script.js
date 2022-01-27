let shipName = prompt("Enter your ship's name")
let shipVelocity = 0
let chosenOption

let aCount = 0
let sCount = 0

function menu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("What do you want to do?\n1 - Accelerate ship\n2 - Slow down ship\n3 - Show onboard data\n4 - Quit")
    }
    return option
}

function accelerate(velocity) {
    let newShipVelocity = velocity + 5
    return newShipVelocity
}

function slowDown(velocity) {
    let newShipVelocity = velocity - 5
    if (newShipVelocity < 0) {
        newShipVelocity = 0
    }
    return newShipVelocity
}

function onboardData(shipName, velocity) {
    alert("Spaceship: " + shipName + "\nVelocity: " + velocity + "km/s")
}

do {
    chosenOption = menu()
    switch (chosenOption) {
        case "1":
            shipVelocity = accelerate(shipVelocity)
            aCount++
            alert("Your ship gained 5km/s of acceleration " + aCount + " times")
            break

        case "2":
            shipVelocity = slowDown(shipVelocity)
            sCount++
            alert("Your ship lost 5km/s of acceleration " + sCount + " times")
            break

        case "3":
            onboardData(shipName, shipVelocity)
            break

        default:
            alert("Ending on-board program")
    }

} while (chosenOption != "4")