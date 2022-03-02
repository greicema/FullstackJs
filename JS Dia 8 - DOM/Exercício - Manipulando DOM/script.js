function saveHouse() {
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    let newListValue = document.createElement("Li")
    newListValue.innerText = area + "m², number " + number + " (" + neighborhood + " - " + city + ")"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remove"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)
    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}