//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return //the html string made from step
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join() // set the innerHTML

const grades = ["A", "B", "A"];
function gradegpa(grade) {
    let gpa = 0
    if (grade === "A") {
        return gpa = 4
    }
    else if (grade === "B") {
        return gpa = 3
    }
}
const gpas = grades.map(gradegpa)
console.log(gpas)

const sum = gpas.reduce((a, b) => a + b)
console.log(sum)

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const filterdefruits = fruits.filter(fruit => fruit.length <= 6)
console.log(filterdefruits)

const numbers = [12, 34, 21, 54]

const luckynumber = numbers.indexOf(21)
console.log(luckynumber)


console.log("Kevin Gonzalez")