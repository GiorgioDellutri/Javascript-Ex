const listaSpesa = [];

while (true) {
    const vuoiAggiungere = prompt("Vuoi aggiungere un articolo alla lista della spesa? (sì/no)");

    if (vuoiAggiungere.toLowerCase() !== 'si') {
        break;
    }

    const nomeArticolo = prompt("Inserisci il nome dell'articolo:");
    const quantitaArticolo = prompt("Inserisci la quantità dell'articolo:");

    const articolo = {
        nome: nomeArticolo,
        quantita: parseInt(quantitaArticolo),
    };

    listaSpesa.push(articolo);
}

console.log("Lista della spesa:");
for (const articolo of listaSpesa) {
    console.log(`${articolo.nome} - Quantità: ${articolo.quantita}`);
}


