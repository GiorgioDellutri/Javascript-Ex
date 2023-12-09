function trovaDuplicati(array) {
    let arrayDuplicati = [];

    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== i && arrayDuplicati.indexOf(array[i]) === -1) {
            arrayDuplicati.push(array[i]);
        }
    }

    return arrayDuplicati;
}
// Esempio di utilizzo
const arrayConDuplicati = [1, 2, 3, 3, 2, 7, 8, 1, 9];
const duplicati = trovaDuplicati(arrayConDuplicati);
console.log(duplicati); // Dovrebbe stampare [1, 2]