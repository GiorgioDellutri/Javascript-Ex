// function mediaNumeriArray(array) {
//     let somma = array.reduce((acc, curr) => acc + curr, 0);
//     console.log(somma)
//     let media = somma / array.length;

//     return media;
// }

// let mediaNumeri = mediaNumeriArray([2, 2, 2])

// console.log(mediaNumeri);



const array = [1, 2, 3, 4, 5];
let somma = array.reduce((acc, curr) => {
    console.log(`Accumulatore: ${acc}, Elemento corrente: ${curr}`);
    return acc + curr;
}, 0);

console.log(somma); // Stampa: 15