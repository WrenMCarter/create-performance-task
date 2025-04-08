function round(longNumber: number) {
    longNumber = longNumber * 100
    
    if (longNumber % 1 < 0.5) {
        longNumber = Math.idiv(longNumber, 1)
    } else if (longNumber % 1 >= 0.5) {
        longNumber = Math.idiv(longNumber + 1, 1)
    } 
    
    let finalNum = "" + longNumber

    return finalNum.charAt(0) + "." + finalNum.charAt(1) + finalNum.charAt(2)
}

function searchList(array: any[], searchTerm: any) {

    for (let k = 0; k <= array.length - 1; k++) {
        if (array[k] = searchTerm) {
            return true
        } 
    }

    return false
}

function convert(grade: string) {
    if (searchList(grades, grade)) {
        
    }
}

let grades = ["A", "B", "C", "D", "F"]
let noPointGrades = ["P", "NP", "W", "I"]
let gradePoints = []

for (let i = 0; i <= grades.length - 1; i++) {
    gradePoints.push(i + 1)
}

game.splash("How many classes do you want to calculate your GPA for?")
let classNumber = game.askForNumber("Number of classes", 3)
let totalPoints = 0
let gpa = 0 

for (let j = 0; j < classNumber; j++) {
   let currentGrade = game.askForString("Class Grade", 2)

}

