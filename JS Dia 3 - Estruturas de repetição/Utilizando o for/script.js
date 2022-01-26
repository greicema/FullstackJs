let shipName = prompt("Enter your ship's name")
let shipLetter = prompt("Which letter would you like to change?")
let newShipLetter = prompt("Which letter would you like to replace " + shipLetter.toUpperCase() + " it with?")
let newShipName = ""

for (let i = 0; i < shipName.length; i++) {
    if (shipName[i] == shipLetter) {
        newShipName += newShipLetter
    } else {
        newShipName += shipName[i]
    }
}

alert("The new name of the ship is " + newShipName.toLocaleUpperCase())