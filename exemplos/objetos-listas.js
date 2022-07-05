"use strict";
const pessoa = {
    name: 'Mariane',
    age: '26',
    job: 'dev'
};
const junior = {
    name: 'Junior',
    age: 23,
    job: 'dev'
};
var Job;
(function (Job) {
    Job[Job["Teacher"] = 0] = "Teacher";
    Job[Job["Analyst"] = 1] = "Analyst";
    Job[Job["Dev"] = 2] = "Dev";
    Job[Job["SoccerPlayer"] = 3] = "SoccerPlayer";
})(Job || (Job = {}));
const ana = {
    name: 'Ana',
    age: 34,
    job: Job.Teacher
};
const paula = {
    name: 'Paula',
    age: 34,
    job: Job.Teacher,
    classes: ['math', 'english', 'science']
};
const lili = {
    name: 'Lily',
    age: 34,
    classes: ['math', 'english', 'science']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(lili.classes);
