const people = [
    { name: 'Paul', year: 2 },
    { name: 'George', year: 2 },
    { name: 'Lucas', year: 2 },
    { name: 'Marco', year: 2 },
    { name: 'Peter', year: 2 },
    { name: 'Carl', year: 2 },
    { name: 'Simon', year: 2 },
    { name: 'Mark', year: 2 },
    { name: 'Sandra', year: 2 },
    { name: 'Alice', year: 2 }
];

// returns a random number betweem min and max
// for example, getRandomNumber(1, 3) will return either 1, 2 or 3, randomly.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Person{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(arg){
        this._name = arg;
    }
}
class Student extends Person{
    constructor(name, year){
        super(name);
        this._year = year;
        this._grade = 0;
    }
    get year(){
        return this._year;
    }
    set year(arg){
        this._year = arg;
    }
    get grade(){
        return this._grade;
    }
    set grade(arg){
        this._grade = arg;
    }
}

const students = people.map(el => new Student(el.name, el.year));
// console.log(students);

class Academy{
    static exam(students){
        students.forEach((student) => {
            let newGrade = getRandomNumber(1,10);
            student.grade = newGrade;
        })
    }
    static graduate(students){
        return students.filter(el => el.grade >= 6);
    }
    static studentLevels(students){
        return students.map((student) => {
            if(student.grade < 5){
                return "Failed";
            }else if(student.grade < 7){
                return "Average";
            }else if(student.grade < 8){
                return "Above Average";
            }else {
                return "Great";
            }
        })
    }
    static studentInfo(students){
        return students.map((student) => {
            return `${student.name}, of year ${student.year}, has a grade of ${student.grade}`;
        })
    }
    static printStudents(students, callbackFc){
        for(let student of students){
            callbackFc(student);
        }
    }
    static averageGrade(students){
        return new Promise((resolve, reject) => {
            if(students.length < 3){
                reject("Too few students!");
            }
            setTimeout(() => {
                    let sum = students.reduce((total, el) => total + el.grade, 0);
                    let average = sum/students.length;
                    resolve(average);
            }, 2000)
                
        })
    }
}

function callbackFunction1({ name }){
    console.log(name);
}

Academy.exam(students);

let graduateStudents = Academy.graduate(students);
console.log(graduateStudents);

let studentLevelStudents = Academy.studentLevels(students);
console.log(studentLevelStudents);

let studentInfoStudents = Academy.studentInfo(students);
console.log(studentInfoStudents);

console.log(students)
console.log(Academy.printStudents(students, callbackFunction1));

let jsonStudents = JSON.stringify(students);
console.log(jsonStudents);

let regularStudents = JSON.parse(jsonStudents);
console.log(regularStudents);

Academy.averageGrade(students)
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
