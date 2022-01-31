function shipSlowDown(velocity, printer) {
    let slowDow
    while (velocity > 0) {
        printer(velocity)
        velocity--
    }
    alert("Ship stopped. The floodgates can be opened.")
}

let shipVelocity = 150
shipSlowDown(shipVelocity, function(velocity) {
    alert("Current Velocity: " + velocity)
})