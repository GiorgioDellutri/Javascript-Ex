function contaCaratteri(stringa, carattere) {

    let arrayCaratteri = stringa.toLowerCase().split('');
    let contaCarattere = 0;

    for (let i = 0; i < arrayCaratteri.length; i++) {
        if (arrayCaratteri[i] === carattere.toLowerCase()) {
            contaCarattere++
        }
    }

    console.log(`Il carattere '${carattere}' è presente nella stringa ${contaCarattere} volte`);

    return contaCarattere;

}
contaCaratteri('martina', 'a')


