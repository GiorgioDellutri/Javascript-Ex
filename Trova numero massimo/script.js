function trovaMax(num1, num2, num3) {
    let numMax = num1;

    if (num3 > numMax) {
        numMax = num3
    } else if (num2 > numMax) {
        numMax = num2;
    }

    // if (num1 === num2 && num2 === num3) {
    //     console.log("I numeri sono tutti uguali");
    // } else {
    //     console.log(`Il numero massimo è: ${numMax}`);
    // }

    console.log(`Il numero massimo è: ` + numMax)
    return numMax
}

trovaMax(14, 6, 10)
