function contaVocali(stringa) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    const caratteri = stringa.toLowerCase().split('');
    let conteggioVocali = 0;

    for (let i = 0; i < caratteri.length; i++) {
        const carattere = caratteri[i];
        if (vocali.includes(carattere)) {
            conteggioVocali++;
        }
    }
    return conteggioVocali;

}

const stringaDiEsempio = "Ciao";
const numeroDiVocali = contaVocali(stringaDiEsempio);

console.log(`Il numero di vocali nella stringa è: ${numeroDiVocali}`);