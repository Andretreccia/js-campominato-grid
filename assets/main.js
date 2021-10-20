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



//crea un ciclo per creare le caselle
for (let i = 1; i <= 51; i++) {
        //crea condizioni corrispondenti ai valori inseriti dall utente
    if (difficult === 1) {
        console.log("Difficile")
    }

}
