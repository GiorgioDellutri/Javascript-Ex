// Scrivi un programma che dato l’anno corrente e un anno di nascita determini:

// l’età della persona
// quanti anni sono necessari per raggiungere i 100

const annoCorrente = 2023;

const annoDiNascita = parseInt(prompt("Inserisci la tua data di nascita:"));


function eta(annoDiNascita) {
    let etaUtente = annoCorrente - annoDiNascita;
    let anniCento = 100 - etaUtente;
    console.log(`la tua età e di ${etaUtente} e ti mancano ${anniCento} per arrivare a cento anni`);

    return {
        eta: etaUtente,
        anniMancanti: anniCento
    };

}

const risultato = eta(annoDiNascita);
