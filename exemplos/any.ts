let valorAny: any;
valorAny = 'oi';
valorAny = 123;
valorAny = true;

let valorStr1: string = 'texto 1';
valorStr1 = valorAny;

let valorStr2: string = 'texto 2';
valorStr2 = valorAny;

function sumStr (str1: string, str2:string){
    console.log(str1+str2)
}

sumStr(valorStr1, valorStr2);
