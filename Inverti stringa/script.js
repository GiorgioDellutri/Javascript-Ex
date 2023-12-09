function isPalindromo(stringa) {
    let array = stringa.split('');
    let arrayInvertito = array.slice().reverse();
    let arrayStringa = array.join('');
    let arrayStringaInvertito = arrayInvertito.join('');

    console.log("Array originale:", array);
    console.log("Array invertito:", arrayInvertito);

    if (arrayStringa === arrayStringaInvertito) {
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }
}

isPalindromo('radar');
