let distanceLightYears = prompt("Enter a distance in light-years")
let chosenOption = prompt("Which unity do you want to convert the distance?\n1 - Parse (pc)\n2 - Astronomical Unity (AU)\n3 - Kilometers (KM)\n\n(Enter the number of the unity option)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceLightYears * 0.306601
        break
    case "2":
        chosenUnity = "Astronomical Unity"
        convertedDistance = distanceLightYears * 63241.1
        break
    case "3":
        chosenUnity = "Kilometers"
        convertedDistance = distanceLightYears * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidentified unity"
        convertedDistance = "Out-of-scope conversion. Press F5."
}

alert("Distance in Light-years: " + distanceLightYears + "\n" + chosenUnity + ": " + convertedDistance)