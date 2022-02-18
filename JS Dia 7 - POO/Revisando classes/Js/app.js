class App {
    constructor() {
        this.spaceship = null
    }

    Start() {
        this.enrollSpaceship()
        let chosenOption

        do {
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        } while (chosenOption != "3")
        this.printAndExit()
    }

    enrollSpaceship() {
        let spaceshipName = prompt("What's the name of the ship?")
        let crewQuantity = prompt("How many passangers?")
        let spaceshipKind = this.askForSpaceshipKind()

        if (spaceshipKind == "1") {
            let weaponsQuantity = prompt("How many weapons are available?")
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
        } else {
            let sitsQuantity = prompt("How many sits?")
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
        }
    }

    askForSpaceshipKind() {
        let chosenOption

        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt("What's the type of the ship?\n1 - Battle\n2 - Transport")
        }
        return chosenOption
    }

    showInitialMenu() {
        const promptMessage = ("What do you want to do?\n1 - Accelerate the ship\n2 - Change the ship\n3 - Show data e exit")
        let chosenOption = prompt(promptMessage)
        while (!["1", "2", "3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }

    redirectFeature(chosenOption) {
        switch (chosenOption) {
            case "1":
                this.accelerateSpacehsip()
                break
            case "2":
                this.enrollSpaceship()
                break
        }
    }
    accelerateSpacehsip() {
        let acceleration = Number(prompt("How much would you like to accelerate?"))
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        let finalMessage = "Name: " + this.spaceship.name + "\n" + "Crew quantity: " + this.spaceship.crewQuantity + "\n" + "Current velocity: " + this.spaceship.currentVelocity + "\n"
        alert(finalMessage)
    }
}