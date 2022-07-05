const pessoa = {
    name: 'Mariane',
    age: '26',
    job: 'dev'
};

const junior: {name: string, age: number, job:string} = {
    name: 'Junior',
    age: 23,
    job: 'dev'
}

enum Job{
    Teacher,
    Analyst,
    Dev,
    SoccerPlayer,
}
interface Person {
    name: string,
    age: number,
    job?: Job,
}

interface Student extends Person {
    classes: string[]
}

const ana: Person ={
    name:'Ana',
    age: 34,
    job: Job.Teacher
}

const paula: Student ={
    name:'Paula',
    age: 34,
    job: Job.Teacher,
    classes: ['math', 'english','science' ]
}

const lili: Student ={
    name:'Lily',
    age: 34,
    classes: ['math', 'english','science' ]
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ', item);
    }
}
listar(lili.classes);