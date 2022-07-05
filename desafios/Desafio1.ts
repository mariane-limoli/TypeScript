// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*let employee = {};
employee.code = 10;
employee.name = "John";*/

let employee2: {code:number, name: string } = {
    code: 10,
    name: 'jon'
}

// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// Respostas 3 e 4
interface Funcionario {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}