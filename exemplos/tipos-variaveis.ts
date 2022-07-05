


function sumValues(input1: number | string, input2: number | string){
    if( typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
// usando type para definir um tipo de variável

type input = number|string;

function sumValues2(input1: input, input2: input){
    if( typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}

console.log(sumValues2('oii, ' + 'bom dia! ', 'Tudo bom?'))
console.log(sumValues2(123, 450));
console.log(sumValues2(123, '450'));



