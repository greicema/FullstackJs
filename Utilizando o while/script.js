let chosenOption = ""
let optionCount = 0
let shipName = prompt("Enter your ship's name")
let chosenOption = prompt("Do you want to go into space fold?\n1 - Yes\n2 - No")

while (chosenOption == "1") {
    optionCount++
    chosenOption = prompt("Do you want to go into the next space fold?\n1 - Yes\n2 - No")
}

alert("Spaceship: " + shipName + "Number of space folds: " + optionCount)