function trovaMax(array) {
    let arrayOrdinato = [];
    let elementoMax = Math.max(...array);
    // let elementoMin = Math.min(...array);

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= elementoMax) {
            arrayOrdinato.push(array[i])
        }
    }

    return arrayOrdinato;
}

risultato = trovaMax([2, 4, 6, 1, 10, 9, 22, 40])
console.log(risultato)
