let inputUtente = document.getElementById('input');
let button = document.getElementById('button-addon2');
let p = document.getElementById('paragrafo');

button.addEventListener('click', function () {
    isPalindroma(inputUtente.value);
});

function isPalindroma(stringa) {
    let array = stringa.split('');
    console.log(array);

    let arrayInvertito = array.reverse();
    console.log(arrayInvertito);

    let arrayStringaInvertito = arrayInvertito.join('');
    console.log(arrayStringaInvertito);

    if (stringa === arrayStringaInvertito) {
        p.textContent = 'La parola è palindroma';
    } else {
        p.textContent = 'La parola non è palindroma';
    }
}