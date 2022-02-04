let spaceship = {
    speed: 0,
    speedUp: function(acceleration) {
        this.speed += acceleration
    }

}

function shipRegister() {
    spaceship.name = prompt("Enter the ship's name")
    spaceship.type = prompt("Enter the ship's type")
    spaceship.maxSpeed = Number(prompt("Enter the ship's max speed"))
}

function shipAccelerate() {
    let acceleration = Number(prompt("How much speed you want to increase? (km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.speed > spaceship.maxSpeed) {
        alert("Maximum speed exceeded!" + "\nShip's Speed: " + spaceship.speed + "km/s" + "\nShip's maximum speed: " + spaceship.maxSpeed + "km/s")
    }
}

function stopShip() {
    alert("Name: " + spaceship.name + "\nType: " + spaceship.type + "\nShip's speed: " + spaceship.speed + "\nMax speed: " + spaceship.maxSpeed)
    spaceship.speed = 0
}

function menu() {
    let chosenOption
    do {
        chosenOption = prompt("Do you want to:\n1 - Accelerate\n2 - Stop")
        switch (chosenOption) {
            case "1":
                shipAccelerate()
                break
            case "2":
                stopShip()
                break
            default:
                alert("Invalid option")
        }
    }
    while (chosenOption != 2)
}

shipRegister()
menu()