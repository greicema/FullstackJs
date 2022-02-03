const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, false],
    ["Darwin", 15, false]
]

let with9Passangers = hitchedSpaceships.filter(spaceship => {
        return spaceship[1] > 9
    }).map(spaceship => {
        return spaceship[0]
    })
    //console.log("Spaceships with greater than 9 passangers: " + with9Passangers)

let noHitchedSpaceships = hitchedSpaceships.findIndex(spaceship => {
        return spaceship[2] == false
    })
    //console.log("Not hitched first spaceship platform: " + (noHitchedSpaceships + 1))

let upperSpaceships = hitchedSpaceships.map(spaceship => {
        return spaceship[0].toUpperCase()
    })
    //console.log("Upper cased spaceships: " + upperSpaceships)

alert("Spaceships with greater than 9 passangers: " + with9Passangers.join(", ") + "\nNot hitched first spaceship platform: " + (noHitchedSpaceships + 1) + "\nUpper cased spaceships: " + upperSpaceships.join(", "))