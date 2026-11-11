var readLineSync = require('readline-sync')
var name = readLineSync.question("What is your name? ")
var testScore = readLineSync.questionInt("What was " + name + " test score?")
var grade = " "
if (testScore < 0 ) {
    console.log("that is an invalid test score!")
} else if (testScore > 100) {
    console.log("That is an invalid test score!")
} else if (testScore > 89.5) {
    grade = "A"
} else if (testScore > 79.5 ) {
    grade = "B"
} else if (testScore > 69.5 ) {
    grade = "C"
} else if (testScore > 59.5 ) {
    grade = "D"
} else {
    grade = "F"
}

console.log(name +  " earned a grade of " + grade)
