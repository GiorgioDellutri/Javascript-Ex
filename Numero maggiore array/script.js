let numeri = [2, 4, 5, 20, 43, 23, 67];

function trovaNumeroMaggiore(array) {
    let numMax = array[0];
    let trovato = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > numMax) {
            numMax = array[i];
            trovato = true;
        }
    }

    if (trovato) {
        console.log(numMax + ' è il numero più grande')
    } else {
        console.log('non ci sono numeri più grandi')
    }
}
console.log(numeri)
let numeroMaggiore = trovaNumeroMaggiore(numeri);
