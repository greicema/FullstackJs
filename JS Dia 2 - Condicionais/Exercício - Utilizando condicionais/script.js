let pilotName = prompt("What's your name, pilot?")
let spaceshipVelocity = 0
newSpaceshipVelocity = prompt("Which velocity would you like to travel?")
velocityConfirmation = confirm("You are traveling at " + newSpaceshipVelocity + " km/s. Are you sure?")

if (velocityConfirmation) {
    spaceshipVelocity = newSpaceshipVelocity
}

if (spaceshipVelocity <= 0) {
    alert("Ship stopped. Consider leaving and increasing speed.")
} else if (newSpaceshipVelocity < 40) {
    alert("You are slow, we can increase more.")
} else if (newSpaceshipVelocity >= 40 && newSpaceshipVelocity < 80) {
    alert("It seems like a good speed to keep.")
} else if (newSpaceshipVelocity >= 80 && newSpaceshipVelocity < 100) {
    alert("You are going too fast. Consider slowing down.")
} else if (newSpaceshipVelocity >= 100) {
    alert("Dangerous speed. Forced automatic control.")
}

alert("Pilot: " + pilotName + "\nVelocity: " + newSpaceshipVelocity + " km/s")