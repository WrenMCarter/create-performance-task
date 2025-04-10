
function round(longNumber: number) {
    longNumber = longNumber * (10**decimalPlaces)
    
    if (longNumber % 1 < 0.5) {
        longNumber = Math.idiv(longNumber, 1)
    } else if (longNumber % 1 >= 0.5) {
        longNumber = Math.idiv(longNumber + 1, 1)
    } 
    
    let finalNum = "" + longNumber

    return finalNum.charAt(0) + "." + finalNum.charAt(1) + finalNum.charAt(2)
}

function findIndex(array: string[], searchTerm: string) {

    for (let k = 0; k <= array.length - 1; k++) {
        if (array[k] == searchTerm) {
            return k
        } 
    }
    
    return array.length
}

function convert(grade: string) {

    let gradePoints = []

    for (let i = 0; i <= grades.length - 1; i++) {
        gradePoints.push(i)
    }

    gradePoints.reverse()
    let gradeIndex = findIndex(grades, grade)

    if (gradeIndex < 5) {
        let thing = gradePoints[gradeIndex]
        totalPoints += thing
    } else {
        let noPointIndex = findIndex(noPointGrades, grade)

        if (noPointIndex < 100){
            classNumber = classNumber - 1
        } else {
            game.splash("error")
        }
    }
}

let grades = ["A", "B", "C", "D", "F"]
let noPointGrades = ["P", "NP", "W", "I"]
let totalPoints = 0
let decimalPlaces = 2
let classPlaces = 3
let gradePlaces = 2



game.splash("How many classes do you want to calculate your GPA for?")
let classNumber = game.askForNumber("Number of classes", classPlaces)


for (let j = 0; j < classNumber; j++) {
   let currentGrade = game.askForString("Class Grade", gradePlaces)
   convert(currentGrade)
}

let gpa = round(totalPoints/classNumber)
game.splash("Your GPA is " + gpa)