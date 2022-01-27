let shipName = prompt("Enter your ship's name")
let reverseShipName = ""

/* OUTRA OPÇÃO DE RESOLUÇÃO
length = shipName.length;
while (length--) {
    reverseShipName += shipName[length];
}*/

for (i = shipName.length - 1; i >= 0; i--) {
    if (shipName[i] == "e") {
        break
    }
    reverseShipName += shipName[i]
}


alert("Ship's original name: " + shipName + "\nPost-hidden name: " + reverseShipName)