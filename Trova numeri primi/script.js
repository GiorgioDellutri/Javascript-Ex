function isPrimo(num) {
    if (num <= 1) {
        console.log('Il numero non è primo');
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log('Il numero non è primo');
            return;
        }
    }

    console.log('Il numero è primo');
}

// Esempi di utilizzo
isPrimo(2); // Il numero è primo
isPrimo(25); // Il numero non è primo
