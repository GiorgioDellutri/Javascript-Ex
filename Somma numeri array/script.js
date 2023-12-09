// Scrivi una funzione che prenda un array di numeri come parametro e restituisca la somma di tutti gli elementi.

function sommaNumeriArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma += array[i]
    }

    return somma
}

let risultato = sommaNumeriArray([2, 2, 2])

console.log(risultato)



// Modo moderno per sommare elementi di un array
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10
