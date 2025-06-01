document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelector("#submitButton")
        .addEventListener("click", clickHandler);
});

function getGrades(inputSelector) {
    const input = document.querySelector(inputSelector).value;
    const grades = input
        .split(",")
        .map((grade) => grade.trim().toUpperCase());
    return grades;
}

function lookupGrade(grade) {
    if (grade === "A") return 4.0;
    else if (grade === "B") return 3.0;
    else if (grade === "C") return 2.0;
    else if (grade === "D") return 1.0;
    else if (grade === "F") return 0.0;
    else return null;
}

function calculateGpa(grades) {
    const points = grades.map(lookupGrade).filter((val) => val !== null);
    if (points.length === 0) return 0;
    const total = points.reduce((sum, gradePoint) => sum + gradePoint, 0);
    return (total / points.length).toFixed(2);
}

function outputGpa(gpa, selector) {
    document.querySelector(selector).innerText = `Your GPA is: ${gpa}`;
}

function clickHandler() {
    const grades = getGrades("#grades");
    const gpa = calculateGpa(grades);
    outputGpa(gpa, "#output");
}
