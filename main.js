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
    return user;
}

//fixCar

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

//addGrades

function addGrades(student, grades){
    // student.grades = student.grades.concat(grades);
    // return student;
    student.grades = student.grades.concat (grades)
    return student; 
}

//getDataType

function getDataType(obj, key){
    return typeof obj[key];
}

//addTodo

function addTodo (todo, newTodo) {
    todo.push(newTodo)
    return todo;
}

//addSong

function addSong (playlist, newSong){
    //Adds the song to the playlist's songs 
    playlist.songs.push(newSong);
    playlist.duration = playlist.duration + newSong.duration;
    return playlist;
}

//updateReportCard

const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};

const updateReportCard = (reportCard, grade) => {
    let gradeSum;
    reportCard.grades.push(grade);
    reportCard.lowestGrade = Math.min(...reportCard.grades);
    reportCard.highestGrade = Math.max(...reportCard.grades);
    gradeSum = reportCard.grades.reduce((previousValue, currentValue) => previousValue + currentValue)

    reportCard.averageGrade = gradeSum / reportCard.grades.length;
    return reportCard;
}


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
