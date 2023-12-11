const consonanti = ['b', 'c', 'd', 'f', 'g', 'h', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'z'];
const vocali = ['a', 'e', 'i', 'o', 'u'];

function contaVocaliConsonanti(string) {
    let numeroVocali = 0;
    let numeroConsonanti = 0;
    let array = string.toLowerCase().split('')

    for (let i = 0; i < array.length; i++) {
        if (vocali.includes(array[i])) {
            numeroVocali++;
        } else if (consonanti.includes(array[i])) {
            numeroConsonanti++;
        }
    }
    console.log(array)
    console.log(`Il numero di consonanti è di: ${numeroConsonanti}, il numero di vocali è di: ${numeroVocali}`)

    return {
        consosanti: numeroConsonanti,
        vocali: numeroVocali
    }
}

array = contaVocaliConsonanti('aeiou');