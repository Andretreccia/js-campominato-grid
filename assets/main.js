/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

//Chiedi all utente il livello di difficoltà
//crea una costante con valore la scelta dell utente

/* const difficult = parseInt(prompt(`Seleziona una difficoltà:
                                        1 = Difficile
                                        2 = Media
                                        3 = Principiante`))
console.log(difficult) */



const difficult = document.getElementById("level").value
console.log(difficult)

document.getElementById("choi_btn").addEventListener("click", function () {
    const difficult = document.getElementById("level").value
    //console.log(difficult)

    const container = document.querySelector(".container")
    container.innerHTML = ''

    if (difficult == 1) {
        for (let i = 1; i <= 100; i++) {

            let cell_10 = document.createElement("div");
            cell_10.className = "cell_10"
            container.append(cell_10)
            let text = `<span>${i}</span>`
            cell_10.innerHTML += text
            cell_10.addEventListener("click", function () {
                this.style.backgroundColor = "blue"
            })



        }
    }

    else if (difficult == 2) {
        for (let i = 1; i <= 81; i++) {

            let = cell_9 = document.createElement("div");
            cell_9.className = "cell_9"
            container.append(cell_9)
            let text = `<span>${i}</span>`
            cell_9.innerHTML += text
            cell_9.addEventListener("click", function () {
                this.style.backgroundColor = "blue"
            })
        }
    }
    else if (difficult == 3) {
        for (let i = 1; i <= 49; i++) {

            let cell_7 = document.createElement("div");
            cell_7.className = "cell_7"
            container.append(cell_7)
            let text = `<span>${i}</span>`
            cell_7.innerHTML += text
            cell_7.addEventListener("click", function () {
                this.style.backgroundColor = "blue"
            })
        }
    }
});

//funzione per ottenere valori corrispondenti al numero di celle


/* function choice(optionValue) {
    let NumberCell
    if (choice == "1") {
        NumberCell = 100
    }
    else if (choice == "2") {

        NumberCell = 81
    }
    else if (choice == "3") {
        NumberCell = 49
    }


}


const choi_btn = document.getElementById("choi_btn")
choi_btn.addEventListener("click", function () {
    const choiceValue = choi_btn.value
    const viewChoice = choice(choiceValue)
    console.log(viewChoice)







})
 */

