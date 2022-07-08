// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//createUser

function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }    
    return user;
}

console.log(createUser('Harry', 'Potter'));
console.log(createUser("Jimmy", "Persons"));

//same thing! you can call your parameters whatever you want
// function createUser(a, b){
//     let user = {
//         firstName: a,
//         lastName: b
//     }    
// }

//Setage

function setAge(user, age){
    //user.age creates age property for the user
    user.age = age;
    return user;
}

console.log(setAge(createUser("Harry", "Potter"),19));
console.log(setAge(
    {
    firstName: 'bob', 
    lastName: 'Nothings'
    },31));

let testUser = {
    firstName: 'Test',
    lastName: 'User'
}
console.log(setAge(testUser,25));

//incrementAge

function incrementAge(user){
    user.age = user.age + 1;
    return user.age;
}

console.log(incrementAge(testUser));

//fixCar

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: true
}

console.log(fixCar(car));

//addGrades

function addGrades(student, grades){
    // student.grades = student.grades.concat(grades);
    // return student;
    for(let i = 0; i < grades.length; i++){
        student.grades.push(grades[i]);
    }
    return student;
}

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
}

const student2 = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
}

const student3 = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
}


const newGrades = [88, 70, 90];
let newGrades2 = [90, 100, 0];
let newGrades3 = [75, 75, 81];


console.log(addGrades(student,newGrades));
console.log(addGrades(student2,newGrades2));
console.log(addGrades(student3,newGrades3));

const car2 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: false
};

//getDataType

function getDataType(obj, key){
    return typeof obj[key];
}
 
console.log("\nGet data type\n")
console.log(getDataType(car2, 'make'));


//addSong

function addSong (playlist, newSong){
    //Adds the song to the playlist's songs 
    playlist.songs.push(newSong);
    playlist.duration = playlist.duration + newSong.duration;
    return playlist;
}

const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

console.log(addSong(playlist,newSong));

//updateReportCard

function updateReportCard(reportCard, newGrade){
    let total = 0; 
    reportCard.grades.push(newGrade);
    if (reportCard.lowestGrade > newGrade){
        reportCard.lowestgrade = newGrade;
    }
    if(reportCard.highestGrade < newGrade){
        reportCard.highestGrade = newGrade;
    }
    for(let i = 0; 1 < reportCard.grades.length; i++)
    {
        total += reportCard.grades[i];
    }
    reportCard.averageGrade = (total/reportCard.grades.length);
    return reportCard;
}

const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};

console.log(updateReportCard(reportCard, 62));








// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
