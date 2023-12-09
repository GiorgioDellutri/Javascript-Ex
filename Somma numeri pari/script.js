let numeri = [1, 2, 3, 4, 5, 6, 2, 4, 2];

function sommaNumeriPari(array) {
    arrayPari = [];
    let somma = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPari.push(array[i])
            somma += array[i]
        }
    }
    console.log('I numeri pari sono ' + arrayPari);
    console.log('La loro somme è: ' + somma);
}

sommaNumeriPari(numeri)