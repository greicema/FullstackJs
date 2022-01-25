let departureDateEntry = prompt("Enter the departure date (DD/MM/YYYY)")
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment()
let dateDifference = today - departureDate
let chosenOption = prompt("Choose how you'd like to show the departure time\n1 - Seconds\n2 - Minutes\n3 - Hours\n4 - Days")

if (chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDifference / 1000)
    alert("Flight time: " + secondsOfDeparture + " seconds")
} else if (chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDifference / 1000 / 60)
    alert("Flight time: " + minutesOfDeparture + " minutes")
} else if (chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDifference / 1000 / 3600)
    alert("Flight time: " + hoursOfDeparture + " hours")
} else if (chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDifference / 1000 / 3600 / 24)
    alert("Flight time: " + daysOfDeparture + " minutes")
} else {
    alert("invalid option")
}