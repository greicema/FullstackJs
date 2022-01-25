let departureDateEntry = prompt("Enter the departure date (DD/MM/YYYY)")
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment()
let dateDifference = today - departureDate