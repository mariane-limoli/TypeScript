"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somaNumeros(num1, num2, devePrintar, frase) {
    let result = num1 + num2;
    if (devePrintar) {
        console.log(frase + result);
    }
    return result;
}
let devePrintar = true;
let frase = 'O resultado da soma é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somaNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
