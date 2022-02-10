class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }
    hitch() {
        this.isHitched = true
        this.entraceDoorsOpen = true
    }

}

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("Do you want to:\n1 - Hitch a spaceship\n2 - Print spaceship's data\n3 - Stop")
    }
    return chosenOption
}

function createSpaceship() {
    let spaceshipName = prompt("Enter the name of the ship")
    let crewQuantity = prompt("Type how many passangers are in the ship")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + " passangers)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []
let chosenOption

while (chosenOption != "3") {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}