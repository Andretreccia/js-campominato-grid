/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

//Chiedi all utente il livello di difficoltà
//crea una costante con valore la scelta dell utente
const difficult = parseInt(prompt(`Seleziona una difficoltà:
                                        1 = Difficile
                                        2 = Media
                                        3 = Principiante`))
console.log(difficult)


const container = document.querySelector(".container")

if (difficult == 1) {
    for (let i = 1; i <= 100; i++) {
        let cell_10 = `<div id="cell_click" class="cell_10">1${i}</div>`
        container.innerHTML += cell_10
        let element = document.getElementById("cell_click")
        element.addEventListener('click', function () {
            let element = document.getElementById("cell_click").classList.add(".1azzurro")
        })

    }
}

else if (difficult == 2) {
    for (let i = 1; i <= 81; i++) {
        let cell_9 = `<div class="cell_9">${i}</div>`
        container.innerHTML += cell_9
    }
}
else if (difficult == 3) {
    for (let i = 1; i <= 49; i++) {
        let cell_7 = `<div class="cell_7">${i}</div>`
        container.innerHTML += cell_7
    }
}
