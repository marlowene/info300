var readLineSync = require('readline-sync');   // enable reading from the console
var studentName = readLineSync.question("What is the sudent's name? ");  // ask for the name, a string so use question
var studentTestScore = readLineSync.questionFloat("What was the student's test score? "); // ask for the test score, a float
var studentGrade = ""; // set a variable to blank, it will be set to the student's grade based on the conditional logic

// begin the conditional logic

if (studentTestScore < 0 || studentTestScore > 100) {  // note the logical OR 
    studentGrade = "Invalid entry";
} else if (studentTestScore > 89.5) {
    studentGrade = "A"
} else if (studentTestScore > 79.5) { 
    studentGrade = "B"
} else if (studentTestScore > 69.5) {
    studentGrade = "C" 
} else if (studentTestScore > 59.5) {
    studentGrade = "D"
} else {
    studentGrade = "F"
}

// display the final message based on the test grade

console.log("Student " + studentName + " received a " + studentTestScore + " which is a " + studentGrade)