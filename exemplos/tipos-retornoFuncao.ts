type tipoInput = number;

function sumValues3(input1: tipoInput, input2: tipoInput): number{
        return input1 + input2;
}

console.log(sumValues3(23, 56));
console.log(sumValues3(123, 450));


// tipo de retorno void
function sumValues4(input1: number, input2: number): void{
        console.log(input1, input2);
}

//Funcoes em callback:
function sumNum(input1: tipoInput, input2: tipoInput, callback: (num: number) => number): number{
        let result = input1 + input2;
        return callback(result);
}

function aoQadrado(num: number): number{
        return num*num;
}

function multPor3(num: number): number{
        return num*3
}

console.log(sumNum(5, 4, aoQadrado));

console.log(sumNum(5, 4, multPor3));